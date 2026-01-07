# Prompt Design Guide — 統合ガイド

## 目的
このドキュメントはリポジトリ内に散在している「画像生成プロンプト設計」のガイダンスを**一箇所に統合**し、運用者やAgentが迷わず同じ形式で出力できるようにすることを目的とする。

---

## 主要方針（Summary ✅）
- **出力は原則として「単一のCombined Prompt」を最優先で提示する**。ユーザーがそのままコピペして生成できることを重視する。
- モデルやツールが個別に **positive/negative の分割** を必要とする場合は、そのフォーマットを *併記* するが、**人間向けの最初の表示は Combined を優先**する。

> 理由: Combined Prompt は可読性が高く、利用者がすぐ使える形式になり、プロンプト解釈の混乱や誤利用を減らすため。内部で positive/negative を保持して最適化するのは可だが、ユーザーに渡す出力はなるべく単一のまとまった文字列とする。

---

## 形式例
### 1) Combined Prompt（推奨）
```
Combined: 1girl, anime-style, clean lineart, high detail, studio lighting, plain mid-gray background; -exclude: checkerboard, watermark, text, blur, extra limbs

# 必要に応じて同じコードブロック内にラベル付きで併記（ユーザーが1回のコピペで済むように）
Positive: 1girl, anime-style, clean lineart, high detail, studio lighting, plain mid-gray background
Negative: checkerboard, watermark, text, blur, extra limbs
Settings: 2048x2048, Steps 40, CFG 7.5
```
- ポイント: 併記するときは**必ず同一コードブロックの中に**ラベル付き（Combined / Positive / Negative）で並べること。ユーザーが複数回のコピペを行わず、1回で生成できることを最優先する。

---

## 実践チェックリスト（出力時）
- ✅ 単一のコードブロックに **Combined Prompt** を必ず含め、モデル分割が併記される場合は同一コードブロック内に**ラベル付きで**（`Positive:` / `Negative:`）並べる。ユーザーが1回のコピペで済むようにする。
- ✅ モデル要件で分割が必須なら **分割フォーマットを併記**（例: SDXLでNegativeを必須とするUI）
- ✅ 背景の扱い（切り抜きが目的なら `plain background`, `white background` を明記）
- ✅ セーフティ配慮: 実在の有名人を暗示する語は避ける（`fictional` / `original character` を明示）
- ✅ 1行で使える例を加える（オプション）

---

## 切り抜き用途の追加注意点
切り抜き用途では背景・輪郭を明確にするため、以下をCombinedでも明示すると良い。
- `sticker type`, `white outline`, `vector art`, `flat background`, `no depth of field`

---

## なぜ「分けない」方が良いか（短く）
- 人が読む際に混乱しにくく、コピペミスが減る。
- ツールやUIによっては Negative の扱いが不統一で、分割を公開すると誤用が増える。
- Combined を優先して公開し、必要に応じて内部で最適化（分割生成）するのが運用上安全かつ実用的である。

---

## リンクと参照
- 詳細: `Image_Protocol.md`（技術的なフィールドやJSONスキーマ）
- 切り抜きテンプレ: `doc/00_Overview/Image_Cutout_Prompts.md`
- キャラクタアートスタイル: `doc/00_Overview/Art_Style_Guide.md`（キャラの描画規約・プロンプトテンプレ・表情ライブラリ）

---

## 免責
このガイドは運用上のベストプラクティスをまとめたものであり、個別モデルの最終チューニング（LoRA, LoCon等）は利用環境に応じて行ってください。
