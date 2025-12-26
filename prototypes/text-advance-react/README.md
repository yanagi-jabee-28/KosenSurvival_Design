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

## （後で戻す）画像連携について
現在は立ち絵表示を一時停止中。再度有効化する際は、`public/characters` 配下に各キャラのフォルダへのリンク（ジャンクション）を作成して `/characters/<Name>/<Name>1.png` を参照してください。
