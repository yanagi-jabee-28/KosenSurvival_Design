# Text Advance React Prototype

KosenSurvival の最初のプロトタイプ。現在は「W14-W16 チュートリアル」用のCUI版（7スロット進行、前期期末判定、タケシ救済）を実装中。

## 起動手順

Windows PowerShell で以下を実行:

```powershell
cd prototypes/text-advance-react
npm install
npm run dev
```

ブラウザで表示されるローカルURLへアクセス（例: http://localhost:5173）。

## 使い方（CUI版）
- 画面左: コンソールログ、右: 立ち絵スロット、中央: コマンドグリッド。
- 行動ボタン（1スロット消費）: 自習 / 過去問を買う / 演習会 / 睡眠 / 甘い誘惑 / タケシを手伝う。
- ステータス: Knowledge / Proficiency / Vitality / Sanity / Credits とタケシ進捗を表示。
- 14日×7スロットを埋めると自動で前期期末テストを実行し、結果を表示。リトライでリセット。

## 今後の拡張
- 行テキストを JSON/Markdown から読み込み
- 既存シナリオ（Year1〜）の抜粋を表示
- フェード演出/立ち絵/背景画像の追加
- 前期期末チュートリアルの設計メモ: [PROTOTYPE_W14-W16.md](PROTOTYPE_W14-W16.md)

## 代替: create-vite で新規作成（参考）
このプロトタイプは既に Vite 構成済みですが、同等の足場を新規に作る場合は次を参考にしてください。

```powershell
# 任意の場所で
npm create vite@latest text-advance-react -- --template react-ts
cd text-advance-react
npm install
npm run dev
```

## 画像連携について

立ち絵は `public/characters` 配下に各キャラのフォルダへのリンク（Windows ジャンクション）を作成して参照します。

### ジャンクション作成手順（Windows）

管理者権限不要で動く `/J`（ジャンクション）を推奨します。開発者モードを有効にしている場合は `/D`（シンボリックリンク）でも可です。

```powershell
cd prototypes/text-advance-react/public/characters
mklink /J Ai ..\..\..\doc\02_Characters\images\Ai
mklink /J Takeshi ..\..\..\doc\02_Characters\images\Takeshi
mklink /J Mina ..\..\..\doc\02_Characters\images\Mina
mklink /J Mai ..\..\..\doc\02_Characters\images\Mai
mklink /J Yuzu ..\..\..\doc\02_Characters\images\Yuzu
mklink /J Player ..\..\..\doc\02_Characters\images\player
```

作成後、`/characters/<Name>/<Name>1.png` 等で参照可能になります。
