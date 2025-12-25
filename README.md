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
├── 00_Overview/            # ゲーム概要とループ設計
│   ├── README.md           # 5年タイムライン、ルート概要
│   └── GameLoop.md         # メインループ（要追記）
├── 01_System/              # コアシステム仕様
│   ├── Time.md             # 週間サイクルとZoom-in
│   ├── Memory.md           # 記憶モデル（流動層/定着層）
│   ├── Params.md           # パラメータ定義
│   ├── Routes.md           # 5ルート分岐の詳細
│   └── School.md           # 学校設定（神城高専）
├── 02_Characters/          # キャラクター設定
│   ├── Cast.md             # 一覧
│   ├── Player.md           # 主人公: 高専 太郎
│   ├── Ai.md               # 一ノ瀬 アイ (Route B)
│   ├── Mina.md             # 赤坂 ミナ (Route A)
│   ├── Mai.md              # 神楽 マイ (Route D)
│   ├── Takeshi.md          # 剛田 タケシ (Route C)
│   ├── Ren.md              # 諏訪野 レン (Route C)
│   └── Yuzu.md             # 若葉 ユズ（後輩）
├── 03_Scenario/            # 年次シナリオ
│   ├── Year1.md            # 1年:「淘汰」
│   ├── Year2.md            # 2年:「中だるみと専攻決定」
│   ├── Year3.md            # 3年:「リーダーシップと継承」
│   ├── Year4.md            # 4年:「社会」
│   └── Year5.md            # 5年:「結実」
└── 99_Data_JSON/           # ゲームデータ（JSON）
    ├── items.json
    ├── subjects.json
    └── events_random.json
```

## 設計思想の参照
- **Source of Truth**: [AGENTS_legacy.md](AGENTS_legacy.md) を常に参照すること。
- **変更履歴**: [AGENTS.md](AGENTS.md) に更新日と変更要約を記録。

## 開発ステータス
- **Phase**: Design (設計完了、実装準備中)
- **Next Steps**: GameLoop.md詳細化、JSON拡充、React/TypeScript実装開始。

詳細は [00_Overview/README.md](00_Overview/README.md) および各ディレクトリのドキュメントを参照。