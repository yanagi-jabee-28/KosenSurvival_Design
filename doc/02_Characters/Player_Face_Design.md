# 主人公の顔設計: Year 1スタート（初期段階）

## 1. ビジュアルコンセプト

### キャラクターアーキタイプ
**「何にでもなれる素材感」を持つ平凡な少年**
- 個性的な特徴を意図的に最小化
- プレイヤーの選択によって「色付く」ビジュアル余地を残す
- 他キャラ（特にヒロイン）との対比で、徐々に個性が浮かび上がる設計

### 初期印象の方程式
**「見た目は平凡 × 目つきに潜在的な力 × 迷いの表情」**

年齢：15歳、新入生、進学校初日  
社会的ポジション：「この中で最も普通の存在」  
心理状態：期待 × 不安 × 緊張の混在

---

## 2. 物理的特徴の詳細設定

### 顔型・骨格構造
| パラメータ | 設定値 | 設計意図 |
|:---|:---|:---|
| **顔型** | 面長（菱型） | 若々しく、未成熟さを表現。長身になる予兆。 |
| **顎ライン** | やや丸く、定義不足 | 15歳の少年の幼さ。成長によって引き締まる余地。 |
| **頬** | やや子どもっぽく柔らかい | 「新入生」感。疲弊とともに痩せ削られる可能性を示唆。 |
| **目の大きさ** | 平均的、やや大きめ | 日本人男性としての標準的な可愛らしさ。個性なし。 |
| **眼距離** | 標準的 | どんなタイプの成長でも違和感なく適応。 |
| **眉毛** | 薄め、まっすぐ | 表情に幅がある設計。不安も決意も両立可能。 |
| **鼻** | 小さく、すっきり | 日本人男子としての標準的な特徴。目立たない。 |
| **口** | 薄く、一般的 | デフォルトでは「何も言わない」状態。開閉の余地あり。 |

### 肌・質感
- **肌色**: 標準的な健康的な白肌（やや暖色）
- **肌質**: つやがなく、乾燥気味 → 寮暮らし・不規則な生活を暗示
- **クマ**: **ない、または極度に薄い** → **タケシとの最大の差別化点**。タケシの「著しい目下クマ」と対比させることで、プレイヤーの「まだ健全な生活」を表現。
- **特徴的なほくろ・傷**：なし →「素材感」を最大化
- **髭**：なし → タケシの「青髭」と対比。清潔感。

### 髪型
- **髪色**: 黒髪（濃黒）
- **髪質**: ストレート、やや硬め
- **長さ**: 短髪（耳が見える程度。3〜5cm）
- **スタイリング**: **寝癖なし、またはごく薄い** → 朝の準備不足ではなく「気をつけられる子」。
- **清潔感**: タケシの「ボサボサの寝癖立ちっぱなし」と対比させて、プレイヤーは「毎日最低限は整理している」
- **設計意図**: プレイヤーは「完璧ではないがちゃんと生活している」。後にスタイリングが変わることで成長を表現可能。タケシ（堕落）とのコントラストが重要。

---

## 3. 表情の初期バリエーション

### Year 1 デフォルト表情5種類

#### (1) **Player_Neutral** — 「無意識の顔」
**使用場面**: 通常時の立ち歩き、授業中の聴講、会話相手の話を聞いている最中

```
目: やや下向き、焦点がぼんやり
眉: リラックス、少し下がり気味
口: 若干開き気味、思考中
全体: 「今ここにいない感じ」の無表情
```

**心理状態**: 新入生の不安と期待の中で、自分の気持ちが掴めていない状態

**画像生成プロンプト**: 
```
Close-up portrait, 15-year-old Japanese technical college student protagonist, male, 
face/headshot, short black straight hair, round youthful face with soft cheekbones, 
slightly unfocused dark eyes looking slightly downward, relaxed eyebrows, 
slightly open mouth (thinking expression, not smiling), 
pale slightly tired skin suggesting irregular sleep and adaptation stress,
casual school uniform (white shirt visible), natural soft classroom lighting,
expression shows uncertainty and distant thoughts, anime/cel-shaded illustration style,
high detail face focus, subtle emotion of mild anxiety mixed with curiosity,
no distinctive features, plain average appearance, forgettable face
```

---

#### (2) **Player_Confused** — 「混乱・不安」
**使用場面**: クラス分け発表時、初めて赤点を知った瞬間、ルール説明を理解していない時

```
目: やや大きく見開き、焦点が定まらない
眉: 少し上がり、内向き（心配そう）
口: 微かに開き、ため息
全体: 「何が起きている？」という戸惑い
```

**心理状態**: 高専の厳しさを初めて認識。対応できるか不安。

**画像生成プロンプト**:
```
Close-up portrait, 15-year-old Japanese technical college student, same character,
face/headshot, short black hair, round youthful face with soft features,
dark eyes slightly widened in confusion and uncertainty, 
eyebrows raised slightly with worry expression, mouth slightly open in mild shock,
pale skin showing first signs of stress, white school uniform collar visible,
realistic moment of bewilderment, struggling to understand situation,
soft fluorescent classroom lighting, anime/cel-shaded, 
vulnerable expression showing anxiety and lack of confidence
```

---

#### (3) **Player_Determined** — 「決意・覚悟」
**使用場面**: 「頑張ろう」と決心した時、新しいチャレンジに挑む前、ヒロインと誓った時

```
目: はっきり前を見つめる、焦点が定まった瞬間
眉: 少し引き下げられ、集中
口: 一文字に引き締められている
全体: 「やる」という決意が目に見える
```

**心理状態**: 不安から脱却し、主体的に行動する覚悟。

**画像生成プロンプト**:
```
Close-up portrait, 15-year-old Japanese technical college student, same character,
face/headshot, short black hair neatly set, young face with emerging maturity,
dark eyes sharp and focused directly forward, eyebrows slightly furrowed in concentration,
mouth set in firm line, determined expression showing resolve and willpower,
pale skin, white school uniform visible, strong direct gaze,
lighting emphasizing the intensity of the moment, anime/cel-shaded,
moment of adolescent determination and courage, ready to take action
```

---

#### (4) **Player_Smiling** — 「笑顔・希望」
**使用場面**: ヒロインとの良好な会話、友人との楽しい時間、目標達成時の喜び

```
目: やや細くなり、温かい光が入る
眉: リラックス、やや上がり気味
口: 自然な笑顔、歯が少し見える程度
全体: 「この瞬間は良い」という満足感
```

**心理状態**: 高専生活の中での小さな幸せ。一瞬の安堵。

**画像生成プロンプト**:
```
Close-up portrait, 15-year-old Japanese technical college student, same character,
face/headshot, short black hair, young round face,
dark eyes naturally narrowed with genuine smile, warm expression,
eyebrows relaxed and raised slightly, mouth showing natural smile with visible teeth,
pale healthy skin with slight flush from happiness, white school uniform,
soft warm lighting, natural genuine happiness expression,
anime/cel-shaded illustration, vulnerable moment of youthful joy and innocence,
hopeful and light atmosphere
```

---

#### (5) **Player_Exhausted** — 「疲労・限界」
**使用場面**: 連続徹夜後、複数の赤点を同時に知った時、心身が折れた瞬間、Sanity低下時

```
目: クマが目立つ、焦点が甘い、光が失われている
眉: 下がり気味、力が入らない
口: 微かに開き、虚ろ
全体: 「もう駄目だ」という無の状態
```

**心理状態**: 高専の現実に潰される寸前。精神的な危機。

**画像生成プロンプト**:
```
Close-up portrait, 15-year-old Japanese technical college student, same character,
face/headshot, short black hair slightly disheveled, young face appearing drawn and hollow,
dark eyes with heavy dark circles (under-eye bags), dull unfocused gaze looking downward,
eyebrows drooping with exhaustion, mouth slightly open with no energy,
pale sickly skin suggesting sleep deprivation and stress, white school uniform disheveled,
dim melancholic lighting emphasizing exhaustion, anime/cel-shaded,
expression of despair and mental breakdown, vulnerable youth at breaking point,
atmosphere of hopelessness and burnout
```

---

## 4. Year別の顔の変化（進化マップ）

### Year 1: 「無垢な新入生」
- **主表情**: N髪は整理されているが、目の焦点がぼんやり
- **目の光**: 不安と期待が混じり、焦点が定まらない
- **クマ**: なし（まだ健全な生活）
- **顔色**: やや蒼白い（適応ストレス）
- **全体的イメージ**: 「何が起きているか分かっていない子ども、だが清潔感がある」
- **タケシとの対比**: タケシの「寝癖・クマ・汚い」と対比させることで、プレイヤーの「真面目さ」が浮かぶ。
- **全体的イメージ**: 「何が起きているか分かっていない子ども」

### Year 2-3: 「専門家への変貌」
- **主表情**: Determined, Smiling（の頻度が増える）
- **髪の変化**: スタイリングが整理されて来る（または個性的に変わる）
- **目の光**: クリアになり、焦点が定まり始める
- **顔色**: 血色が良くなる（または逆に痩せ削られる）
- **全体的イメージ**: 「自分が何者かわかり始めた若者」

### Year 4-5: 「プロフェッショナル」
- **主表情**: Determined, Confident
- **顔の特徴**: 顎が引き締まり、大人びた顔立ちに
- **目の光**: 強い意志が見える
- **顔色**: 鍛えられた、または疲弊した（ルートによる）
- **全体的イメージ**: 「高専を乗り越えた大人」

---

## 5. ルート別の顔の個性化

Year 3以降、プレイヤーの選択によって顔の特徴が徐々に変わる設計。

| ルート | 顔の特徴的な変化 | 髪型の変化 | 目の質感 |
|:---|:---|:---|:---|
| **Route A (エンジニア)** | 顔が引き締まる、日焼け、工場の油汚れ跡 | 短くなり、より実用的に | 目に「モノを作る喜び」が宿る |
| **Route B (リサーチャー)** | 顔が若干痩せ削られる、眼鏡をかけるかも | 無頓着になり、より乱れ気味 | 知識の深さが目に映る |
| **Route C (ハッカー)** | 暗い雰囲気、クマが目立つ、冷徹な表情 | より短く、あるいはパーマ等で個性化 | 計算高さと危険性 |
| **Route D (マネージャー)** | 顔が整い、表情が柔らかくなる、政治的オーラ | スタイリングが洗練される | 他者を理解する温かさ |
| **Route E (漂流者)** | 顔が肥え、表情が空虚になる、無気力 | 無頓着になる | 光が完全に失われる |

---

## 6. 技術的実装仕様

### 画像生成時の統一パラメータ
- **アスペクト比**: 1:1（バストショット、顔フォーカス）
- **モデル推奨**: Gemini Imagen 3 または SDXL (face reference strength 0.80-0.85)
- **参照画像強度**: 0.80-0.85 (初期の顔の一貫性確保)
- **イメージングステップ**: 40-50 steps
- **CFG Scale**: 10.5-11.0
- **品質**: 高品質アニメ・セル画調（他キャラと統一）

### 表情生成時の追加指示
```
"same character as reference" を含める（一貫性確保）
"15-year-old Japanese technical college student" を明示（年齢設定）
"plain average appearance, forgettable face" を含める（個性最小化）
"no distinctive features" で特徴的なほくろ等を排除
```

---

## 7. デザイン意図の詳細解説

### なぜ「平凡」である必要があるのか

1. **プレイヤー投影性**: 
   - 個性的すぎると、プレイヤーが「他人のキャラを操作している感覚」に陥る
   - 平凡だからこそ、プレイヤーが「自分がこの世界にいる」という没入感が得られる

2. **他キャラ（ヒロイン）との対比効果**:
   - マイ（決断力・美しさ）、アイ（頭脳・冷徹さ）、ミナ（技術・情熱）、ユズ（素直さ・後進）と比較すると
   - プレイヤーの「凡平さ」が逆に「何にでもなれる柔軟性」として魅力的に見える

3. **成長の可視化**:
   - Year 1から Year 5への顔の変化が「劇的」に見える
   - 同じキャラの before/after が、ゲーム進行の「時間の重さ」を物語る

### 目の設計が最も重要な理由

- 「平凡な顔」の中で、唯一の変化可能な窓が「目」
- 初期は「不安と期待」、終盤は「経験と覚悟」という内面的成長を目で表現
- 他のキャラ（特にヒロイン）との「目の質感の違い」が、関係性を暗示する

---

## 8. 実装ロードマップ

### Phase 1: 初期顔の確定（Year 1）
- [ ] Player_Neutral の参照画像を生成
- [ ] Player_Confused, Determined, Smiling, Exhausted を生成
- [ ] `player_expressions.json` を作成
- [ ] UI（CharacterStand.tsx）にプレイヤー画像を統合

### Phase 2: Year別進化の実装（Year 2-3）
- [ ] Year 2 バージョンの顔 5種類を生成
- [ ] Year 3 バージョンの顔 5種類を生成
- [ ] 顔の漸進的な変化を UI に反映

### Phase 3: ルート別個性化（Year 4-5）
- [ ] Route A-E 各自のバリアントを生成
- [ ] ゲーム進行ロジックに顔の変化を紐付け
- [ ] エンディング演出への統合

---

## 9. 補足：心理的リアリティ

### なぜこの5つの表情か

1. **Neutral**: 日常的。ゲーム内の「デフォルト状態」。
2. **Confused**: 高専の「ショック」と「適応の苦しみ」を象徴。
3. **Determined**: プレイヤーの選択肢による「主体的な行動」を可視化。
4. **Smiling**: ゲームの中で「報酬」として機能。
5. **Exhausted**: ゲーム内の「危機」と「リセット」の予兆を表現。

この5種は、高専 1 年生が実際に経験する感情フローを反映している。

---

**設計完了日**: 2025-12-25  
**対象**: Year 1 期間のビジュアル  
**次ステップ**: 参照画像の生成と JSON データの構築
