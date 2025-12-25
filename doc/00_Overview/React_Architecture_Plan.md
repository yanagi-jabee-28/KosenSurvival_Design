# KosenSurvival React 設計計画書

更新日: 2025-12-25
対象: KosenSurvival (設計ドキュメントをReact SPAとして実装)

---

## 1. 目的・ゴール
- **目的**: 既存の世界観・システム設計を React + TypeScript の SPA として実装可能な形に具体化する。
- **主ゴール**:
  - ゲームループ、時間管理、イベント、キャラクター、学校設定の各ドメインを React の状態管理・コンポーネントへ落とし込む。
  - 将来の拡張（Year2〜Year5、新キャラ、新イベント）に強い疎結合アーキテクチャ。
  - データ駆動（JSON）によるイベント・アイテム・科目の差し替え容易性。

参考設計資料:
- ルーティング: [doc/01_System/Routes.md](doc/01_System/Routes.md)
- 時間管理: [doc/01_System/Time.md](doc/01_System/Time.md)
- パラメータ: [doc/01_System/Params.md](doc/01_System/Params.md)
- メモリ: [doc/01_System/Memory.md](doc/01_System/Memory.md)
- ゲームループ: [doc/00_Overview/GameLoop.md](doc/00_Overview/GameLoop.md)
- 学校設定: [doc/01_System/School.md](doc/01_System/School.md)
- キャラクター一覧: [doc/02_Characters/Cast.md](doc/02_Characters/Cast.md)
- シナリオ: [doc/03_Scenario/Year1.md](doc/03_Scenario/Year1.md), [doc/03_Scenario/Year2.md](doc/03_Scenario/Year2.md), [doc/03_Scenario/Year3.md](doc/03_Scenario/Year3.md), [doc/03_Scenario/Year4.md](doc/03_Scenario/Year4.md), [doc/03_Scenario/Year5.md](doc/03_Scenario/Year5.md)
- JSONデータ: [doc/99_Data_JSON/items.json](doc/99_Data_JSON/items.json), [doc/99_Data_JSON/subjects.json](doc/99_Data_JSON/subjects.json), [doc/99_Data_JSON/events_random.json](doc/99_Data_JSON/events_random.json)

---

## 2. 技術スタック
- **フロントエンド**: React 18 + TypeScript, Vite
- **状態管理**: Zustand（または Redux Toolkit。小規模開始→将来移行可）
- **ルーティング**: React Router v6
- **スタイリング**: Tailwind CSS（または CSS Modules/Chakra UI）
- **テスト**: Vitest + React Testing Library, Playwright（E2E）
- **フォーマット/品質**: ESLint（TypeScript/React推奨設定）, Prettier
- **永続化**: localStorage（短期）/ IndexedDB（中期、セーブスロット）

---

## 3. プロジェクト構成
```
/kosen-survival-react
  /src
    /app            # エントリ/プロバイダ
    /routes         # 画面ルーティング
    /components     # UIコンポーネント
    /features       # ドメイン機能（game, time, events, characters, school）
    /store          # Zustand/Redux ストア
    /data           # JSONの型付け済み読み込み/加工層
    /assets         # 画像等（既存 images/ を参照）
    /lib            # 共通ユーティリティ
    /hooks          # カスタムフック
    /types          # 共通型定義（Params/Events/Characters など）
  /tests            # ユニット/E2E テスト
```

- 既存レポジトリの JSON と画像は `src/data`/`src/assets` で参照。必要に応じてビルド時コピー。

---

## 4. ドメイン→状態管理の対応
- **ゲーム進行 `game`**: ゲームフェーズ（タイトル/学期/放課後/休日）、所持金、アイテム、科目習熟度、関係値、フラグ。
- **時間 `time`**: 年/学期/週/曜日/時限、日付、現在時刻。Tick/Advance APIで遷移。[doc/01_System/Time.md](doc/01_System/Time.md)
- **イベント `events`**: ランダム/条件付き/固定イベント。発火条件/重み/クールダウン。選択肢と結果適用。
- **キャラクター `characters`**: ステータス、関係値、好感度、属性。画像の表情差分。[doc/02_Characters/*](doc/02_Characters)
- **学校 `school`**: 系統、施設、年間行事、時間割。[doc/01_System/School.md](doc/01_System/School.md)
- **パラメータ `params`**: 体力、ストレス、学力等コア指標。[doc/01_System/Params.md](doc/01_System/Params.md)

- 各ドメインは slice（Zustand store）を持ち、相互作用は `services` 層の純関数で統制。

---

## 5. ルーティングと画面構成
- `/` タイトル/ニューゲーム/ロード
- `/home` 学校生活ダッシュボード（時間/ステータス/行動メニュー）
- `/map` 施設マップ（教室/図書館/寮/校庭など）
- `/class` 授業画面（科目選択、習熟度上昇）
- `/event` イベントビュー（選択肢）
- `/characters/:id` キャラ詳細（関係値/プロフィール/イベント履歴）
- `/inventory` アイテム/所持品
- `/settings` 設定（音量/表示/セーブ/ロード）

ルート定義は [doc/01_System/Routes.md](doc/01_System/Routes.md) を基準。

---

## 6. コンポーネント設計（抜粋）
- レイアウト: `AppLayout`, `Header`, `StatusBar`, `Footer`
- ダッシュボード: `TimePanel`, `ParamsPanel`, `ActionMenu`
- マップ: `FacilityGrid`, `FacilityCard`
- 授業: `SubjectList`, `StudyAction`
- イベント: `EventCard`, `ChoiceList`, `EffectPreview`
- キャラ: `CharacterCard`, `RelationMeter`, `ExpressionViewer`
- 共通: `Modal`, `Dialog`, `Toast`, `ProgressBar`

---

## 7. データ取り込み・型定義
- `src/data/loader.ts`: JSON読込とスキーマ検証（Zod）。
- `src/types/*`: `Item`, `Subject`, `Event`, `Character`, `Params` 等の型。
- イベント効果は `Effect` 型（パラメータ変動、フラグ付与、時間進行など）。

---

## 8. ゲームループと時間進行
- `advanceTime(tick: Tick)` で時間遷移 → 行動/イベント判定。
- 行動選択 → 成功判定/効果適用 → 次フェーズへ。
- 週次/月次/学期切替のフック（行事/試験）を `scheduler` に定義。
- 参照: [doc/00_Overview/GameLoop.md](doc/00_Overview/GameLoop.md)

---

## 9. イベントシステム
- イベント登録: ランダム/固定/条件付きの3種。
- 条件 DSL: `time`, `params`, `flags`, `location`, `relations` の合成。
- 抽選: 重み付き選択（クールダウン/既出除外）。
- 適用: 選択肢ごとに `Effect[]` を順次適用、ロールバック不可（基本）。

---

## 10. セーブ/ロード（永続化）
- スナップショット: `game`, `time`, `events`, `characters`, `school` のシリアライズ。
- `localStorage` に複数スロット、メタ情報（日時/学期/場所）。
- 将来: IndexedDB + 圧縮（LZ-String）に拡張。

---

## 11. 画像・表情差分
- 既存 `doc/02_Characters/images` を `src/assets` で参照。
- `ExpressionViewer` はキャラID+表情キーで表示。
- 画像プロトコル参照: [Image_Protocol.md](Image_Protocol.md)

---

## 12. UI/UX・スタイル
- Tailwind ベース、カラーパレットは学校テーマに準拠。
- レスポンシブ（モバイル優先）。
- アクセシビリティ: キーボード操作/コントラスト/ARIA。

---

## 13. テスト戦略
- ユニット: ゲームロジック純関数（時間進行/イベント抽選/効果適用）。
- コンポーネント: 状態反映と選択肢動作。
- E2E: 1日進行/学期切替/イベント発火の回帰。

---

## 14. パフォーマンス・品質
- 状態分割で再レンダリング抑制（Zustand selector）。
- 大量リストに仮想化（React Window）。
- 画像はビルド時最適化（サイズ/形式）。

---

## 15. 国際化・設定
- 初期は日本語固定。将来 i18n（react-i18next）。
- 設定画面にフォントサイズ/表示モード。

---

## 16. セキュリティ
- クライアントのみ想定。外部APIなし。
- 将来オンライン化時はデータ整合/改竄対策。

---

## 17. デプロイ
- 静的ホスティング（GitHub Pages/Vercel）。
- CI: lint/test/build を PR 時に実行。

---

## 18. マイルストーンロードマップ
1. プロジェクト初期化（Vite + TS）/ ルーティング骨格
2. 時間管理・ゲームループの最小実装
3. イベントシステム（固定→条件→ランダム）
4. キャラクター/関係値/画像表示
5. アイテム/科目/授業行動
6. セーブ/ロード/設定画面
7. UI磨き/アクセシビリティ/パフォーマンス
8. Year2 以降の拡張とデータ投入

---

## 19. 次ステップ（実装準備コマンド例）
```bash
# Vite + React + TypeScript
npm create vite@latest kosen-survival-react -- --template react-ts
cd kosen-survival-react
npm install
npm install zustand react-router-dom zod tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

---

## 20. メモ
- 設計思想の変更が生じた場合は [AGENTS_legacy.md](AGENTS_legacy.md) を更新し、要約を [AGENTS.md](AGENTS.md) に追記すること。

---

## 21. プロトタイプ（テキスト送りのみ）
- 最小プロトタイプは [prototypes/text-advance-react](prototypes/text-advance-react) に配置。
- 起動手順は同フォルダの README を参照。
- 将来はシナリオ（Year1〜）の抜粋を JSON 供給して差し替え可能。