# Character Cutout Prompts — Combined Templates

このファイルは「切り抜き（背景除去）に最適化された」主要キャラクター向けの、すぐにコピペ可能な**Combined Prompt**テンプレ集です。各プロンプトは以下の基準に従っています：

- スタイル: Modern Clean Anime（MCA） — `clean lineart`, `2D cel shading`, `soft studio lighting`
- **プロジェクト署名（Style token）: `KosenSurvival_MCA_v1` を必ず `Combined` または `Positive` に含めること（作者のサインとしての役割）。**
- 切り抜き最適化: `sticker type`, `white outline`, `flat simple white background` を優先
- **初期は全員素顔（化粧なし）をデフォルトとする**: `no makeup`, `bare-faced`, `natural skin` を `Combined` または `Positive` に含め、`lipstick`, `eyeshadow`, `eyeliner`, `mascara`, `blush`, `contour`, `false eyelashes` などメイク関連を `Negative` に含めること。
- セーフティ: 実在人物の言及は避け、`original character` / `fictional` を明記
- フォーマット: 最初に `Combined:` を提示し、同一コードブロック内に `Positive:` / `Negative:` / `Settings:` を併記

---

## 見た目差別化ガイドライン（設定資料向け）
- シルエットを固有化: 髪型の外周、肩幅、帽子/ヘアバンド/スカーフなど外形アクセを1〜2個ずつ固定。
- パレット分離: 主要3色（Primary/Secondary/Accent）をキャラごとに専用化し、背景には無彩色（mid-gray/white）を使用。
- ワンポイント: 視線を集めるアクセサリを各キャラに必ず1個設定（例: 安全オレンジの工具、黒縁メガネ、ヘアピン）。
- 体格差を記述: 身長帯と肩幅、筋肉量（スリム/アスリート/ぽっちゃり）を明記し、被りを避ける。
- 顔パーツ差別化: 眉形（太/細/アーチ）、目のサイズと二重/一重、鼻の描き方を固定化。
- 表情セット: 全員に `neutral / slight_smile / angry / sad / focused` を用意し、比較して被りをチェック。

## キャラ別イメージカラー（生成・UI共通で使用）
| キャラ | Primary | Secondary | Accent | メモ |
| --- | --- | --- | --- | --- |
| 一ノ瀬 アイ | #0f1115 | #39424f | #5bc7f2 | クールな無彩色＋アイスシアンのライン |
| 赤坂 ミナ | #2f2a27 | #c9a66b | #f47c27 | 工房の煤＋作業着ベージュ＋安全オレンジ |
| 神楽 マイ | #2f2522 | #6b2f3a | #c23c4f | 深いブラウン＋ワインレッド＋ステージ紅 |
| 剛田 タケシ | #1f2333 | #6b7a5a | #8de849 | ミッドナイトネイビー＋ダスティオリーブ＋ネオンライム |
| 諏訪野 レン | #0a0c0f | #2f3c4a | #4b7bd8 | インクブラック＋ガンメタ＋コバルト眼鏡縁 |
| 若葉 ユズ | #f9b2c0 | #c9b7ff | #8fd8ff | ピーチピンク＋ラベンダー＋スカイブルー |
| プレイヤー | #2c3e50 | #dce4ef | #f5b041 | ニュートラルネイビー＋アイスグレー＋アンバー |

Combined使用時: 各キャラのPrimary/Accentを1〜2語トークン化（例: `primary palette #2f2a27 #c9a66b safety orange accent`）して前段に追加すると被りを避けやすい。

## 使い方メモ 🔧
- まずは小ロットで生成して、安定トークン（瞳の描写、髪型、服装）を確定してください。
- キャラ一貫性の維持には `character_token_v1`（例: `ichinose_ai_v1`）や LoRA/seed の併用を推奨します。
- 直接透過PNGが必要な場合: `white background` 出力 → 自動切り抜き（remove.bg 等）を推奨。`transparent` を直接指定すると checkerboard アーティファクトが出る場合があります。

---

### 一ノ瀬 アイ (Ichinose Ai)
```
Combined: KosenSurvival_MCA_v1, palette #0f1115 #39424f ice-cyan accent #5bc7f2, 一ノ瀬 アイ (Ichinose Ai), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, slender, pale skin, long straight black hair (waist length), sharp single-lid black eyes, neutral expression, black hoodie and jeans, crisp vertical silhouette, sticker type, white outline, plain solid mid-gray background (no pattern), high contrast edges, minimal shadow, no transparency, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, drop shadow, volumetric lighting, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: ichinose_ai_v1, palette #0f1115 #39424f #5bc7f2, clean lineart, cel shading, bust shot, black hoodie, sticker type, plain mid-gray or white background, high contrast edges, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, drop shadow, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.5–8, Output: PNG (plain background)
```
Variations: `half shot` or `full body` に切替可能。感情差分（`neutral`, `slight_smile`, `angry`）。一貫性確保に `ichinose_ai_v1` を推奨。

---

### 赤坂 ミナ (Akasaka Mina)
```
Combined: KosenSurvival_MCA_v1, palette #2f2a27 #c9a66b safety orange accent #f47c27, 赤坂 ミナ (Akasaka Mina), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, small athletic build, short messy black hair, warm tan skin, round brown eyes (curious), work-worn hands with minor scars and band-aids, casual mechanic outfit with tool in pocket and band-aids on fingers, sticker type, white outline, plain solid mid-gray background (no pattern), high contrast edges, avoid deep shadows, no transparency, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: akasaka_mina_v1, palette #2f2a27 #c9a66b #f47c27 safety orange tools, mechanic elements, tools visible, band-aids on hands, vivid expression, cel shading, sticker type, plain mid-gray or white background, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust) or 2048x3072 (half), Steps 30–50, CFG 6.5–8, Output: PNG (plain background)
```
Notes: 手の傷や工具の小物は重要なアイデンティティです。`work-worn hands` トークンは必ず含める。

---

### 神楽 マイ (Kagura Mai)
```
Combined: KosenSurvival_MCA_v1, palette #2f2522 #6b2f3a stage accent #c23c4f, 神楽 マイ (Kagura Mai), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, tall athletic dancer build, short dark brown hair, strong focused eyes, confident posture, dance-practice outfit or sleek student council suit, headband visible, black wristwatch, sticker type, white outline, plain solid mid-gray background (no pattern), clean silhouette, minimal motion blur, no transparency, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: kagura_mai_v1, palette #2f2522 #6b2f3a #c23c4f, dancer posture, confident gaze, headband, wristwatch, cel shading, sticker type, plain mid-gray or white background, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, motion blur, depth of field, bokeh, blurry, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust) or 2048x3072 (half), Steps 30–50, CFG 6.5–8, Output: PNG (plain background)
```
Variations: `stage-ready` 表情（passionate）や `student council suit`（formal）が使い分け可能。

---

### 剛田 タケシ (Goda Takeshi)
```
Combined: KosenSurvival_MCA_v1, palette #1f2333 #6b7a5a neon accent #8de849, 剛田 タケシ (Goda Takeshi), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, average height, messy black bedhead hair, sleepy brown eyes with under-eye bags, casual gamer outfit (graphic tee with neon lime print, hoodie), relaxed/slouching posture, earphones visible, sticker type, white outline, plain solid mid-gray background (no pattern), high contrast edges, minimal shadow, no transparency, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: goda_takeshi_v1, palette #1f2333 #6b7a5a #8de849 neon accent, gamer aesthetic, casual slouch, earphones, sleepy expression, cel shading, sticker type, plain mid-gray or white background, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.0–7.5, Output: PNG (plain background)
```
Notes: イヤホンやスナックの小物はキャラらしさを高める。`sleepy` と `bright eyes (gaming)` を使い分けて表情差分を作る。

---

### 諏訪野 レン (Suwano Ren)
```
Combined: KosenSurvival_MCA_v1, palette #0a0c0f #2f3c4a cobalt accent #4b7bd8, 諏訪野 レン (Suwano Ren), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, tall slender build, short styled black hair, black rim glasses, pale skin with dark under-eye bags, calm expression, dark casual clothing (black shirt, hoodie), sticker type, white outline, plain solid mid-gray background (no pattern), crisp edges, no transparency, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: suwano_ren_v1, palette #0a0c0f #2f3c4a #4b7bd8 glasses accent, calculated gaze, cel shading, high detail, sticker type, plain mid-gray or white background, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.5–8, Output: PNG (plain background)
```
Variations: `adjust glasses` / `remove glasses (rare)` / `tired (heavy bags)` を差し替えて表情差分を生成。

---

### 若葉 ユズ (Wakaba Yuzu)
```
Combined: KosenSurvival_MCA_v1, palette #f9b2c0 #c9b7ff sky accent #8fd8ff, 若葉 ユズ (Wakaba Yuzu), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, petite youthful build, shoulder-length black hair with slight curl at tips, eyebrow-length bangs, large round brown sparkling eyes, cheerful smile, pastel outfit (pink purple sky blue), small hairpin or ribbon, slightly oversized skirt, sticker type, white outline, plain solid mid-gray background (no pattern), high contrast edges, no transparency, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: wakaba_yuzu_v1, palette #f9b2c0 #c9b7ff #8fd8ff pastels, cute petite girl, pastel outfit with ribbon, sticker type, plain mid-gray or white background, high detail, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.0–7.5, Output: PNG (plain background)
```
Notes: メガネ差分は `glasses, thin black frame` を Positive に追加して別バージョン生成。

---

### プレイヤー (Default Player)
```
Combined: KosenSurvival_MCA_v1, palette #2c3e50 #dce4ef amber accent #f5b041, プレイヤー (default male student), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, average build, short black hair, calm friendly expression, neutral navy uniform or casual outfit with small amber accessory (notebook strap/keyholder), sticker type, white outline, plain solid mid-gray background (no pattern), high contrast edges, minimal shadow, no transparency, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: player_default_v1, palette #2c3e50 #dce4ef #f5b041 accent, clean lineart, cel shading, average male build, short black hair, neutral navy uniform or casual with amber accessory, sticker type, plain mid-gray or white background, high contrast edges, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.0–7.5, Output: PNG (plain background)
```
Notes: プレイヤーはニュートラル基準。性別差分が必要な場合は `female` / `androgynous` を Positive に追加し、髪長さやアクセント色を微調整。

---

## 追加の運用ノート
- 各キャラで `character_token_v1`（例: `ichinose_ai_v1`, `akasaka_mina_v1`）を用意しておくと、一貫した顔立ち・衣装が安定します。
- 最初の検証では、各キャラにつき 10–20 画像を生成し、ベストをリファレンスとして保存してから量産すること。
- 切り抜きの自動化ワークフロー: 1) 白背景 PNG を生成 → 2) 自動切り抜きツール（remove.bg / Photoshop auto select / Transparent Background LoRA）→ 3) 必要に応じて微調整／白縁追加。

---

参考: `Prompt_Design_Guide.md`, `Image_Cutout_Prompts.md`, `Art_Style_Guide.md` を遵守しています。

*作成: 2026-01-08 — KosenSurvival デザイン指針: 切り抜き用プロンプト集*