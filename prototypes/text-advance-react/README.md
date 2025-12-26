# Text Advance React Prototype

KosenSurvival の最初のプロトタイプ（テキスト送りのみ）。

## 起動手順

Windows PowerShell で以下を実行:

```powershell
cd prototypes/text-advance-react
npm install
npm run dev
```

ブラウザで表示されるローカルURLへアクセス（例: http://localhost:5173）。

## 使い方
- 「次へ」でテキストを1行進める
- 「最初から」で最初に戻る
- チェックで自動送りON/OFF、速度を選択
- キー操作: Space/Enterで送る、Aで自動送り切替
- 進行位置は `localStorage` に保存（リロード後も継続）
 - ステータス表示: 体力/メンタル/資金/地頭/人望/業 を表示
 - 行動ボタン: 「休む」「勉強」「アルバイト」「交流する」でステータスを増減

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
