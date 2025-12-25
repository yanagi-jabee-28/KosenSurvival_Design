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
 - 立ち絵表示: 5キャラ（Ai/Mai/Mina/Takeshi/Yuzu）の `*1.png` を表示

## 今後の拡張
- 行テキストを JSON/Markdown から読み込み
- 既存シナリオ（Year1〜）の抜粋を表示
- フェード演出/立ち絵/背景画像の追加

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
プロトタイプでは既存画像を再利用するため、`public/characters` 配下に各キャラのフォルダへのリンク（ジャンクション）を作成しています。

リンクは自動作成済みです（Ai/Mai/Mina/Takeshi/Yuzu）。手動で作成する場合の例:

```powershell
$root = "C:\\Users\\kaito\\Documents\\GitHub\\KosenSurvival_Design"
$pub = Join-Path $root "prototypes\\text-advance-react\\public\\characters"
New-Item -ItemType Junction -Path (Join-Path $pub "Yuzu") -Target (Join-Path $root "doc\\02_Characters\\images\\Yuzu")
```

画像参照パスの例:
- `/characters/Yuzu/Yuzu1.png`
- `/characters/Takeshi/Takeshi1.png`
