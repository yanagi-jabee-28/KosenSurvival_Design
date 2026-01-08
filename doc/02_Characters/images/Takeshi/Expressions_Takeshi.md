# 剛田 タケシ (Goda Takeshi) — 表情差分プロンプト集

このファイルは切り抜き（背景除去）用途に最適化した、タケシの表情差分プロンプトをまとたものです。
各ブロックは "Combined / Positive / Negative / Settings" の順で使えるテンプレートになっています。既存の `Combined`（neutral）にある `neutral expression` 部分を差し替えて運用してください。

---

## 1) Sleepy（眠そう） 😪
```
Combined: KosenSurvival_MCA_v1, palette #1f2333 #6b7a5a neon accent #8de849, 剛田 タケシ (Goda Takeshi), sleepy expression, half-closed heavy-lidded eyes, under-eye bags emphasized, slightly parted lips, relaxed/slouching posture, earphones visible, graphic tee with neon lime print, sticker type, white outline, plain solid mid-gray background (no pattern), high contrast edges, minimal shadow, no transparency, natural skin flush (not makeup);
-exclude: photorealistic, watermark, text, extra limbs, mutated hands, depth of field, bokeh, blurry, fuzzy edges, checkerboard, checkered, chessboard, grid pattern, transparent background, alpha channel, drop shadow, heavy makeup, glossy lips
Positive: goda_takeshi_v1, palette #1f2333 #6b7a5a #8de849, sleepy, half-closed eyes, under-eye bags, earphones, casual slouch, cel shading, sticker type
Negative: photorealistic, watermark, text, blurry, checkerboard, heavy makeup
Settings: 2048x2048 (bust), Steps 30–45, CFG 5.5–7.0, Output: PNG (plain background)
```

---

## 2) Focused / Bright Gaming（集中・覚醒） 🎮
```
Combined: KosenSurvival_MCA_v1, palette #1f2333 #6b7a5a neon accent #8de849, 剛田 タケシ (Goda Takeshi), focused gaming expression, bright wide eyes with strong catchlight, slight confident grin, leaning forward posture, hands holding controller or visible earphone mic, subtle rim light, sticker type, white outline, plain solid mid-gray background (no pattern), high contrast edges, no transparency;
-exclude: photorealistic, watermark, text, extra limbs, mutated hands, checkerboard, transparent background, heavy makeup, motion blur excessive
Positive: goda_takeshi_v1, palette #1f2333 #6b7a5a #8de849, gaming-focused, bright eyes, confident grin, controller or earphones, cel shading, sticker type
Negative: photorealistic, watermark, text, blurry, checkerboard, heavy makeup
Settings: 2048x2048 (bust/half), Steps 40–60, CFG 6.5–8.0, Output: PNG (plain background)
```

---

## 3) Excited / Victory（歓喜・勝利） 🎉
```
Combined: KosenSurvival_MCA_v1, palette #1f2333 #6b7a5a neon accent #8de849, 剛田 タケシ (Goda Takeshi), excited victory expression, wide open smiling mouth, raised arm or pumped fist (half shot), dynamic pose lines, earphones visible, neon tee bright accent, sticker type, white outline, plain solid mid-gray background (no pattern), no transparency;
-exclude: photorealistic, watermark, text, extra limbs, mutated hands, checkerboard, transparent background, heavy makeup
Positive: goda_takeshi_v1, palette #1f2333 #6b7a5a #8de849, excited, big grin, raised arm, energetic, cel shading, sticker type
Negative: photorealistic, watermark, text, blurry, checkerboard, heavy makeup
Settings: 2048x2048 (half preferred), Steps 40–60, CFG 6.5–8.0, Output: PNG (plain background)
```

---

## 4) Annoyed / Irritated（苛立ち） 😤
```
Combined: KosenSurvival_MCA_v1, palette #1f2333 #6b7a5a neon accent #8de849, 剛田 タケシ (Goda Takeshi), annoyed expression, furrowed brows, tight mouth, slight glare, crossed arms or clenched fist, casual outfit with earphones, sticker type, white outline, plain solid mid-gray background (no pattern), no transparency;
-exclude: photorealistic, watermark, text, extra limbs, mutated hands, checkerboard, transparent background, heavy makeup
Positive: goda_takeshi_v1, palette #1f2333 #6b7a5a #8de849, annoyed, furrowed brows, clenched jaw, cel shading, sticker type
Negative: photorealistic, watermark, text, blurry, checkerboard, heavy makeup
Settings: 2048x2048 (bust), Steps 30–50, CFG 6.0–7.5, Output: PNG (plain background)
```

---

## 5) Embarrassed / Shy（照れ） 😳
```
Combined: KosenSurvival_MCA_v1, palette #1f2333 #6b7a5a neon accent #8de849, 剛田 タケシ (Goda Takeshi), embarrassed expression, slight downward glance, natural light blush (subtle flush, not makeup), hand rubbing neck or looking away, half-smile or nervous smile, casual slouch, sticker type, white outline, plain solid mid-gray background (no pattern), no transparency;
-exclude: photorealistic, watermark, text, extra limbs, mutated hands, checkerboard, transparent background, heavy makeup, glossy lips
Positive: goda_takeshi_v1, palette #1f2333 #6b7a5a #8de849, embarrassed, subtle blush, shy glance, cel shading, sticker type
Negative: photorealistic, watermark, text, blurry, checkerboard, heavy makeup
Settings: 2048x2048 (bust), Steps 30–45, CFG 5.5–7.0, Output: PNG (plain background)
```

---

## 6) Exhausted / Burnt-out（疲弊） 😩
```
Combined: KosenSurvival_MCA_v1, palette #1f2333 #6b7a5a neon accent #8de849, 剛田 タケシ (Goda Takeshi), exhausted expression, droopy eyes, deep under-eye bags, slumped shoulders, slightly disheveled tee, faint sweat drop, sticker type, white outline, plain solid mid-gray background (no pattern), no transparency;
-exclude: photorealistic, watermark, text, extra limbs, mutated hands, checkerboard, transparent background, heavy makeup
Positive: goda_takeshi_v1, palette #1f2333 #6b7a5a #8de849, exhausted, droopy eyes, heavy bags, slumped posture, cel shading, sticker type
Negative: photorealistic, watermark, text, blurry, checkerboard, heavy makeup
Settings: 2048x2048 (bust), Steps 30–45, CFG 5.5–7.0, Output: PNG (plain background)
```

---

# 運用メモ
- テンプレは "expression" トークンのみ差し替えて使うのが管理しやすいです（base の他要素は維持）。
- 「blush」は必ず「natural / subtle / not makeup」と明記してください。
- 検証: 各表情でまず 2–3 枚生成し、最良の1枚をリファレンスとして保存（ファイル名に表情タグを付ける例: `goda_sleepy_01.png`）。
- 要望があれば、このファイルを `doc/02_Characters/` 内の `Takeshi_expressions.md` に移動するか、タケシ節に直接マージします。

*作成: 2026-01-08 — 剛田タケシ表情差分プロンプト集*