# KosenSurvival_Design

## プロジェクト概要
**KOSEN Survival: The Five Years Odyssey** の設計資料リポジトリ。

高専5年間を舞台としたサバイバル型育成シミュレーションゲームの設計思想、システム仕様、キャラクター設定、シナリオ構成を体系的に管理する。

## ディレクトリ構造
```
KosenSurvival_Design/
├── AGENTS_legacy.md        # 設計思想のSource of Truth
├── AGENTS.md               # AI Agent向け指令（変更履歴を記録）
├── README.md               # 本ファイル（プロジェクト概要）
├── Image_Protocol.md       # 画像生成プロンプト規約
├── archive/                # 旧バージョンファイルのアーカイブ
├── doc/                    # 設計ドキュメント
│   ├── 00_Overview/        # ゲーム概要とループ設計
│   │   ├── README.md       # 5年タイムライン、ルート概要
│   │   ├── GameLoop.md     # メインループ（詳細版）
│   │   ├── GameLoop_Phase1.md        # Phase 1用シンプルループ
│   │   ├── TechSpec_Phase1.md        # Phase 1技術仕様
│   │   ├── React_Architecture_Plan.md # React実装計画
│   │   ├── UI_Layout_Design.md       # UI配置設計
│   │   ├── Art_Style_Guide.md        # アートスタイルガイド
│   │   ├── Prompt_Design_Guide.md    # プロンプト設計規約
│   │   ├── Character_Cutout_Prompts.md # キャラ切り抜きプロンプト
│   │   └── Image_Cutout_Prompts.md   # 汎用画像切り抜きプロンプト
│   ├── 01_System/          # コアシステム仕様
│   │   ├── Time.md         # 週間サイクルとZoom-in
│   │   ├── Memory.md       # 記憶モデル（流動層/定着層）
│   │   ├── Params.md       # パラメータ定義
│   │   ├── Routes.md       # 5ルート分岐の詳細
│   │   └── School.md       # 学校設定（神城高専）
│   ├── 02_Characters/      # キャラクター設定
│   │   ├── Cast.md         # 一覧
│   │   ├── Speech_Patterns.md # 口調・台詞統一基準 (2026-01-15追加)
│   │   ├── Player.md       # 主人公: 高専 太郎
│   │   ├── Ai.md           # 一ノ瀬 アイ (Route B)
│   │   ├── Mina.md         # 赤坂 ミナ (Route A)
│   │   ├── Mai.md          # 神楽 マイ (Route D)
│   │   ├── Takeshi.md      # 剛田 タケシ (Route C)
│   │   ├── Ren.md          # 諏訪野 レン (Route C)
│   │   ├── Zen.md          # 室井 禅 (Route E)
│   │   ├── Yuzu.md         # 若葉 ユズ（後輩）
│   │   └── images/         # キャラクター画像・表情データ
│   ├── 03_Scenario/        # 年次シナリオ
│   │   ├── Year1.md        # 1年:「淘汰」
│   │   ├── Year2.md        # 2年:「中だるみと専攻決定」
│   │   ├── Year3.md        # 3年:「リーダーシップと継承」
│   │   ├── Year4.md        # 4年:「社会」
│   │   └── Year5.md        # 5年:「結実」
│   └── 99_Data_JSON/       # ゲームデータ（JSON）
│       ├── items.json
│       ├── subjects.json
│       ├── events_random.json
│       └── scenes_phase1.json # Phase 1シーンデータ
└── game/                   # 実装ディレクトリ (React + TypeScript)
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── README.md
    ├── public/             # 公開アセット
    │   ├── characters/     # キャラクター立ち絵
    │   └── data/           # JSONデータ
    └── src/                # ソースコード
        ├── App.tsx
        ├── main.tsx
        ├── components/     # Reactコンポーネント
        ├── types/          # TypeScript型定義
        └── utils/          # ユーティリティ関数
```

## 設計思想の参照
- **Source of Truth**: [AGENTS_legacy.md](AGENTS_legacy.md) を常に参照すること。
- **変更履歴**: [AGENTS.md](AGENTS.md) に更新日と変更要約を記録。
- **2026-01-15**: キャラクター台詞作成の絶対ルール追加。新規台詞作成時は [doc/02_Characters/Speech_Patterns.md](doc/02_Characters/Speech_Patterns.md) と該当キャラドキュメントを必ず参照。口調・性格の統一性を厳守。詳細は [AGENTS_legacy.md](AGENTS_legacy.md) セクションH参照。
- **2026-01-12**: 設定拡張の原則（Canon-first, Surprise-second）を追加。新規設定は既存を最大限活かし、意外性は必要箇所へ局所導入。詳細は [AGENTS_legacy.md](AGENTS_legacy.md) を参照。
- **2026-01-01**: 一般的なノベルゲーム設計とユーザビリティ原則を追加しました。詳しくは [AGENTS.md](AGENTS.md) と Source of Truth ([AGENTS_legacy.md](AGENTS_legacy.md)) を参照してください。
- **画像生成プロンプト出力**: 画像生成用プロンプトはコピペしてそのまま生成できる形式で出力すること。**ユーザー向けには単一のCombined Prompt を優先して提示**し、必要に応じてモデル別の分割（Positive/Negative）を併記する。詳細は [doc/00_Overview/Prompt_Design_Guide.md](doc/00_Overview/Prompt_Design_Guide.md) と [Image_Protocol.md](Image_Protocol.md) を参照。

## 開発ステータス
- **Phase**: Phase 1 実装中（シンプルビジュアルノベル）
- **Current**: 基本的な立ち絵表示、メッセージボックス、選択肢システムが動作中
- **Next Steps**: キャラクター画像アセット作成、背景画像追加、台詞の拡充

詳細は [doc/00_Overview/README.md](doc/00_Overview/README.md) および各ディレクトリのドキュメントを参照。