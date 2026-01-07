# Character Cutout Prompts — Combined Templates

このファイルは「切り抜き（背景除去）に最適化された」主要キャラクター向けの、すぐにコピペ可能な**Combined Prompt**テンプレ集です。各プロンプトは以下の基準に従っています：

- スタイル: Modern Clean Anime（MCA） — `clean lineart`, `2D cel shading`, `soft studio lighting`
- **プロジェクト署名（Style token）: `KosenSurvival_MCA_v1` を必ず `Combined` または `Positive` に含めること（作者のサインとしての役割）。**
- 切り抜き最適化: `sticker type`, `white outline`, `flat simple white background` を優先
- **初期は全員素顔（化粧なし）をデフォルトとする**: `no makeup`, `bare-faced`, `natural skin` を `Combined` または `Positive` に含め、`lipstick`, `eyeshadow`, `eyeliner`, `mascara`, `blush`, `contour`, `false eyelashes` などメイク関連を `Negative` に含めること。
- セーフティ: 実在人物の言及は避け、`original character` / `fictional` を明記
- フォーマット: 最初に `Combined:` を提示し、同一コードブロック内に `Positive:` / `Negative:` / `Settings:` を併記

---

## 使い方メモ 🔧
- まずは小ロットで生成して、安定トークン（瞳の描写、髪型、服装）を確定してください。
- キャラ一貫性の維持には `character_token_v1`（例: `ichinose_ai_v1`）や LoRA/seed の併用を推奨します。
- 直接透過PNGが必要な場合: `white background` 出力 → 自動切り抜き（remove.bg 等）を推奨。`transparent` を直接指定すると checkerboard アーティファクトが出る場合があります。

---

### 一ノ瀬 アイ (Ichinose Ai)
```
Combined: 一ノ瀬 アイ (Ichinose Ai), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, slender, pale skin, long straight black hair (waist length), sharp single-lid black eyes, neutral expression, hoodie and jeans, bust shot, sticker type, white outline, flat simple white background, high contrast edges, minimal shadow, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, transparent background, drop shadow, volumetric lighting, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: ichinose_ai_v1, original character, clean lineart, cel shading, bust shot, white background, sticker type, high detail, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.5–8, Output: PNG (white background)
```
Variations: `half shot` or `full body` に切替可能。感情差分（`neutral`, `slight_smile`, `angry`）。一貫性確保に `ichinose_ai_v1` を推奨。

---

### 赤坂 ミナ (Akasaka Mina)
```
Combined: 赤坂 ミナ (Akasaka Mina), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, small athletic build, short messy black hair, warm tan skin, round brown eyes (curious), work-worn hands with minor scars and band-aids, casual mechanic outfit or hoodie with tool in pocket, bust shot, sticker type, white outline, flat simple white background, high contrast edges, avoid deep shadows, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: akasaka_mina_v1, original character, mechanic elements, tools, vivid expression, cel shading, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, extra limbs, mutated hands, bokeh, blurry, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust) or 2048x3072 (half), Steps 30–50, CFG 6.5–8, Output: PNG
```
Notes: 手の傷や工具の小物は重要なアイデンティティです。`work-worn hands` トークンは必ず含める。

---

### 神楽 マイ (Kagura Mai)
```
Combined: 神楽 マイ (Kagura Mai), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, tall athletic dancer build, short dark brown hair, strong focused eyes, confident posture, dance-practice outfit or sleek suit (for student council), bust or half shot, sticker type, white outline, flat simple white background, clean silhouette, minimal motion blur, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, depth of field, bokeh, blurry, fuzzy edges, checkerboard, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: kagura_mai_v1, modern clean anime, dancer posture, confident gaze, cel shading, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, motion blur, bokeh, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust) or 2048x3072 (half), Steps 30–50, CFG 6.5–8, Output: PNG
```
Variations: `stage-ready` 表情（passionate）や `student council suit`（formal）が使い分け可能。

---

### 剛田 タケシ (Goda Takeshi)
```
Combined: 剛田 タケシ (Goda Takeshi), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, average height, messy black bedhead hair, sleepy brown eyes with under-eye bags, casual gamer outfit (graphic tee, hoodie), relaxed/slouching posture, bust shot, sticker type, white outline, flat simple white background, high contrast edges, minimal shadow, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: goda_takeshi_v1, gamer aesthetic, casual, sleepy expression, cel shading, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, bokeh, blurry, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.0–7.5, Output: PNG
```
Notes: イヤホンやスナックの小物はキャラらしさを高める。`sleepy` と `bright eyes (gaming)` を使い分けて表情差分を作る。

---

### 諏訪野 レン (Suwano Ren)
```
Combined: 諏訪野 レン (Suwano Ren), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, tall slender build, short styled black hair, black rim glasses, pale skin with dark under-eye bags, calm expression, dark casual clothing (black shirt, hoodie), bust shot, sticker type, white outline, flat simple white background, crisp edges, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: suwano_ren_v1, original character, glasses, calculated gaze, cel shading, high detail, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, bokeh, blurry, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.5–8, Output: PNG
```
Variations: `adjust glasses` / `remove glasses (rare)` / `tired (heavy bags)` を差し替えて表情差分を生成。

---

### 若葉 ユズ (Wakaba Yuzu)
```
Combined: 若葉 ユズ (Wakaba Yuzu), original character, modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, petite youthful build, shoulder-length black hair with slight curl at tips, eyebrow-length bangs, large round brown sparkling eyes, cheerful smile, cute pastel outfit (pink/purple/sky blue), small hairpin or ribbon, skirt (slightly oversized fit), bust shot, sticker type, white outline, flat simple white background, high contrast edges, no makeup, bare-faced, natural skin; -exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Positive: wakaba_yuzu_v1, cute petite girl, pastel outfit, white background, sticker type, high detail, no makeup, bare-faced, natural skin
Negative: photorealistic, watermark, text, bokeh, blurry, heavy makeup, lipstick, eyeshadow, eyeliner, mascara, blush, contour, false eyelashes, glossy lips
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.0–7.5, Output: PNG
```
Notes: メガネ差分は `glasses, thin black frame` を Positive に追加して別バージョン生成。

---

## 追加の運用ノート
- 各キャラで `character_token_v1`（例: `ichinose_ai_v1`, `akasaka_mina_v1`）を用意しておくと、一貫した顔立ち・衣装が安定します。
- 最初の検証では、各キャラにつき 10–20 画像を生成し、ベストをリファレンスとして保存してから量産すること。
- 切り抜きの自動化ワークフロー: 1) 白背景 PNG を生成 → 2) 自動切り抜きツール（remove.bg / Photoshop auto select / Transparent Background LoRA）→ 3) 必要に応じて微調整／白縁追加。

---

参考: `Prompt_Design_Guide.md`, `Image_Cutout_Prompts.md`, `Art_Style_Guide.md` を遵守しています。

*作成: 2026-01-08 — KosenSurvival デザイン指針: 切り抜き用プロンプト集*