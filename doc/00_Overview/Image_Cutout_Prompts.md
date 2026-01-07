# 切り抜きに最適化された生成プロンプト（Cheat Sheet）

このドキュメントは、AI生成画像（Stable Diffusion / Midjourney / NijiJourney 等）を「一発で切り抜きやすく」生成するための実践ルール集です。プロンプトを工夫することで、背景除去の自動化が格段に楽になります。

**関連**: プロンプトの形式や運用に関する統合ベストプラクティスは `doc/00_Overview/Prompt_Design_Guide.md` に、キャラクタ描画規約（色味・線・表情・命名規約）は `doc/00_Overview/Art_Style_Guide.md` にまとめてあります（ユーザー向けにはCombined Promptを優先する方針）。

## ゴール
- 切り抜き（背景除去）での手作業・マスク修正を最小化する。
- Photoshop の自動選択 / remove.bg / alpha PNG 出力 などのツールで高精度に抜ける画像を得る。

## 黄金則（要点）
- ステッカー風（白縁）を作らせる: `sticker`, `white outline`, `die-cut`, `vector art`
- 背景を白・平坦に: `white background`, `simple background`, `flat background`
- ボケを禁止する: ネガティブに `depth of field`, `bokeh`, `blurry`, `fuzzy edges`
- セルルックで線を明瞭に: `cel shading`, `flat color`, `thick lines`, `bold lines`, `high contrast`
- 影やドラップシャドウを避ける: ネガティブに `shadow`, `drop shadow`, `casting shadow`

## コピペ用（切り抜き特化）

Positive:
```
(character description),
solo,
sticker type, white outline, vector art,
simple background, white background,
flat color, cel shading, bold lines, high contrast,
minimalist
```

Negative:
```
complex background, scenery, realistic, photorealistic,
shadow, drop shadow, casting shadow,
depth of field, bokeh, blurry, fuzzy edges,
volumetric lighting, cinematic lighting
```

## Stable Diffusion / ローカル環境での追加手法
- LayerDiffusion / Transparent Background LoRA: 可能であれば直接アルファ付きPNGを出力できるため、最短ルート。
- Background Removal LoRA: 白背景化や背景単純化に有効。

## 運用メモ
- 最初は小ロットでバッチ生成して、どのトークンが安定するか検証してから運用に落とす。
- ステッカー縁（白枠）は切り抜きの保険になるが、最終的に表情や服のディテールを損なわない程度の太さを選ぶ。

---
*作成: 2026-01-08 — Image generation tips for cutout-friendly assets.*
