# キャラクタアートスタイルガイド — Modern Clean Anime (VN向け)

## 概要 🎨
このガイドは本プロジェクトのキャラクタ画像（立ち絵・表情・差分）の**統一された“タッチ”**を定義します。基本方針は「アニメ調（Modern Clean Anime）・可読性優先・ゲーム実装に最適化（切り抜き・差分管理しやすい）」です。

---

## 主要決定（要点） ✅
- **スタイル名**: Modern Clean Anime（略称: MCA）
- **表現技法**: クリーンな線画 + セルシェーディング（2段階〜3段階）
- **線の扱い**: 中〜細の均一なライン（ラフなスケッチは不可）
- **ライティング**: ソフトなスタジオライティング。劇的なシネマ照明やボリュメトリック光は避ける。
- **背景**: ポートレートは単色または微グラデ、切り抜き用は `white background` / `plain solid`／`transparent` を優先
- **ファイル仕様**: 表情差分はPNG（透過や白背景）、推奨生成解像度は**2048×2048（顔/バスト）**、**2048×3072（ハーフ／全身）**。必要に応じて 4096 サイズを派生生成。

---

## 比率・デザイン原則 🔧
- **顔の特徴**: 優先順位は「目 > 髪 > 口 > 鼻」。目はやや大きめでハイライトは控えめに2点程度。鼻は簡潔に描写。
- **体のプロポーション**: 表示用途は主にバスト〜ハーフが多いため、肩幅はやや細めでシルエットが読みやすいことを重視。
- **色調**: 中間色を中心にやや落ち着いた彩度（UI上で背景とぶつからないように）。キャラ毎にベースカラー（髪/瞳/アクセント）を固定する。

---

## 表情・差分セット（必須） 😊😠😢😳
各キャラは下記の最小表情セットを用意すること:
- neutral (通常)
- smile / happy (微笑)
- big_smile / cheerful (大笑)
- sad (悲しい)
- angry (怒り)
- surprised (驚き)
- embarrassed / blushing (照れ)
- sleepy / tired (眠い)
- shouting / talk (喋り口用口形)

加えて目閉じ・目そらし・半笑い等、ゲームの要件に応じて増やす。

---

## アセットのバリエーションと命名規約 🗂️
- バリアント: `headshot` (顔のみ), `bust` (胸上), `half` (腰上), `full` (全身)
- 各バリアントは複数の**服装 / ポーズ / 表情**を含む
- 命名例: `mai_bust_2048_smile.png` / `player_half_2048_surprised_transparent.png`

---

## 生成プロンプト（コピー＆ペースト可能）📋
（Combined Prompt — まずこれを使う）
```
Modern clean anime style, clean lineart, 2D cel shading, soft studio lighting, high detail, original character, consistent identity, bust shot, plain mid-gray background; -exclude: photorealistic, watermark, text, extra limbs, fuzzy edges
```

Positive（モデル分割が必要な場合）:
```
1girl, modern anime style, clean lineart, cel shading, soft studio lighting, high detail, consistent face, original character, bust shot
```
Negative:
```
photorealistic, watermark, text, extra limbs, mutated hands, bokeh, blurry, lowres
```

**切り抜き向け追加トークン**: `sticker type, white outline, flat background, no depth of field`

---

## 一貫性を保つための運用ルール 📌
- **リファレンス必須**: 新キャラ追加・再生成時は最低3点のリファレンス（正面・斜め・笑顔）を用意する。
- **Identity Token / Seed**: 可能であれば LoRA/LoCon や `character_name_v1` のような固定トークン、もしくはシード値を併用して一貫性を保つ。
- **品質チェック**: 生成後は下記を確認する: 顔のプロポーション一致、瞳の色/ハイライト、衣装アクセント色が基準通りか。

---

## 例: 早見テンプレ（日本語）
```
『キャラ名』のバストアップ、アニメ調、クリーンな線画、セルシェーディング、ソフトなスタジオ照明、表情は“微笑み”、背景は単色（切り抜き目的で白）、高詳細、オリジナルキャラ； -exclude: 実写風, 低解像度, 文字, ウォーターマーク
```

---

## 変更履歴とガバナンス 🔁
- スタイルに変更を加える場合は `doc/00_Overview/Art_Style_Guide.md` を編集し、変更点をコミットメッセージと `AGENTS_legacy.md` に要約して記録する。

---

## 参考・関連ドキュメント
- `doc/00_Overview/Prompt_Design_Guide.md` — プロンプト運用方針
- `doc/00_Overview/Image_Cutout_Prompts.md` — 切り抜き特化プロンプト


*作成: 2026-01-08 — KosenSurvival デザイン指針（キャラクタ画風）*