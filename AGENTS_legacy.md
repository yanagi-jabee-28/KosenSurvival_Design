# AGENTS.md - Project Handover Protocol (Legacy)

> **SYSTEM ALERT**: To the next AI Agent. This document captures the current design philosophy and flow of "KOSEN Survival". Read before changing specs or data.

> **SOURCE OF TRUTH (設計思想の参照元)**: このファイルは設計思想の公式な参照元（Source of Truth）です。設計思想に変更がある場合は必ずこのファイルを更新し、関連ドキュメント（例：`AGENTS.md`）に変更の要約と更新日を記録してください。

## 1. Project Identity
- **Title**: KOSEN Survival: The Five Years Odyssey
- **Genre**: 高専生活サバイバル・育成シミュレーション (Life Simulation / RPG)
- **Platform**: Web (React/TypeScript, Vite 想定)
- **Core Concept**:
  - 「単位はHP、時間は通貨」: 週次で時間を配分し、単位(Credits)を守る。
  - 「忘却の恐怖」: 放置した科目は自動で点数が下がる。
  - 「5年間の大河ドラマ」: 学年ごとにルールとジャンルが変わり、累積リソースで最終決戦に挑む。

## 2. Design Philosophy

### A. スケール可変制 (Year-Scaled Rules)
学年が上がるごとに時間粒度とジャンルが変化する。

| 学年 | テーマ | ジャンル | 時間単位 | 主な敵 |
|:---|:---|:---|:---|:---|
| **1年** | Survival | リソース管理RPG | 1週間 | 授業スピード、生活習慣、赤点 |
| **2年** | Specialization | スキル育成SLG | 1週間 | 中だるみ、専門系統選択 |
| **3年** | Leadership | チーム運営RTS | 1週間 | 部活運営、後輩指導 |
| **4年** | Society | オープンワールドADV | 1週間 | インターン、TOEIC、研究室見学、GPA戦争 |
| **5年** | Legacy | ボスバトル（卒研） | イベント | 研究室配属、卒研、進路、ラスボス教授 |

### B. Epistemic Integrity（認識論的正直性）
- 「分かったつもり」を罰する。テストは Knowledge と Proficiency の両方を要求。
- 自習を避けると Proficiency が伸びず、赤点で Credits を失う。

### C. Anti-Fragility（反脆弱性）
- 失敗（赤点・留年・退学）はゲームオーバーでなく、Route E など別ルートへの分岐点。
- Route A-D へ届かなくても、漂流ルートで再起の選択肢を残す。

### D. 堕落と救済の螺旋
- サボりは一時的に Sanity を回復させるが、テストで赤点を招き Route E を引き寄せる。
- 室井 禅（留年王）が救済と更なる堕落の両方を提供する。

## 3. Directory Structure
```
KosenSurvival_Design/
├── 00_Overview/            # 概要・ループ
│   ├── README.md           # タイトル、ジャンル、5年タイムライン、ルート概要
│   └── GameLoop.md         # メインループ（要追記）
├── 01_System/              # コアシステム
│   ├── Time.md             # 週間サイクルとZoom-in
│   ├── Memory.md           # 流動層/定着層の記憶モデル
│   ├── Params.md           # パラメータ定義
│   ├── Routes.md           # 5ルート分岐の詳細
│   └── School.md           # 学校設定（神城高専の詳細）
├── 02_Characters/          # キャラクター設定
│   ├── Cast.md             # 一覧
│   ├── Player.md           # 主人公: 高専 太郎
│   ├── Ai.md               # 一ノ瀬 アイ
│   ├── Mina.md             # 赤坂 ミナ
│   ├── Mai.md              # 神楽 マイ
│   ├── Takeshi.md          # 剛田 タケシ
│   ├── Ren.md              # 諏訪野 レン
│   └── Yuzu.md             # 春日井 ユズ（後輩）
├── 03_Scenario/            # 年次シナリオ
│   ├── Year1.md            # 「淘汰」
│   ├── Year2.md            # 「中だるみと専攻決定」
│   ├── Year3.md            # 「リーダーシップと継承」
│   ├── Year4.md            # 「社会」
│   └── Year5.md            # 「結実」
└── 99_Data_JSON/           # データ
    ├── items.json
    ├── subjects.json
    └── events_random.json
```

## 4. Key Systems

### A. Time System: Weekly Cycle + Zoom-in
- 平日はポリシー選択で自動進行（授業態度/放課後/夜）。
- 休日・テスト期間は 7 スロット手動操作（Morning, AM Class, Lunch, PM Class, After School, Night, Sleep）。
- 1年=32週（4Q）。各Qの終わりに試験ボス。

### B. Memory System: Sediment Layer
- 点数 = Liquid（流動層）+ Solid（定着層）。
- Liquid: 授業・一夜漬けで獲得、-25%/day 減衰。
- Solid: 自習で Liquid を変換、-0.5%/day 減衰。
- 定着レベル: Liquid/Soft/Firm/Diamond（Diamond は忘却なし）。
- テスト式: $\text{Result} = (\text{Knowledge} \times 0.3) + (\text{Proficiency} \times 0.7)$。

### C. Player Parameters

| Param | 説明 | 主な入手 | 用途 |
|:---|:---|:---|:---|
| Knowledge | 知識量 | 授業 / 自習 | テスト合格に必要 |
| Proficiency | 実力・定着度 | 自習 / 演習 | テスト合格に必須 |
| Logic | 論理思考 | 難問挑戦 / アイとの論理バトル | Route B 必須パラメータ |
| Credits | 単位(HP) | テスト合格 | 0 で留年/退学 |
| Sanity | 精神状態 | 睡眠 / 交流 / 禅 | 低下で不利イベント |
| Time | 可処分時間 | 週ごとに配分 | 全行動の資源 |

### D. Route Branching (5 Paths)
- **Year1-2 潜伏**: 行動で隠しポイント蓄積。
- **Year3 確定**: 上位ポイントのルートに固定し、専用イベント発生。
- **Year4-5 完遂**: ルート固有ストーリーとエンディング分岐。

| Route | テーマ | パートナー | 主要条件/特徴 |
|:---|:---|:---|:---|
| A: 鉄と回路の熱血篇 | ロボコン/モノづくり | 赤坂 ミナ | Proficiency(Physics/Machining) > 40、部活継続 |
| B: 象牙の塔の探求篇 | 研究/アカデミック | 一ノ瀬 アイ | Logic > 20、Knowledge > 80、論理バトル勝利 |
| C: 電脳の反逆者篇 | ハッキング/ビジネス | 諏訪野 レン + 剛田 タケシ | Charisma/Risk > 30、資金調達、タケシ救済 |
| D: 碧き正道の統率者篇 | 生徒会/マネジメント | 神楽 マイ | Charisma/Leadership > 40、予算戦争 |
| E: 灰色の漂流者篇 | モラトリアム/留年 | 室井 禅 | 失敗・留年で突入、Sanity 回復と停滞の両面 |

## 5. Core Characters
- 主人公: 高専 太郎（凡人スタート、5年間で成長）。
- パートナー: 一ノ瀬 アイ (B), 赤坂 ミナ (A), 剛田 タケシ (C), 諏訪野 レン (C, 資産継承), 神楽 マイ (D), 室井 禅 (E)。
- ボス例: 鬼瓦 厳（一般科目数学教員, Year1 テストボス）。

## 6. Scenario Structure
- **Year1: The Filter** — 授業適応、Week15 タケシ分岐、学年末試験がボス。工学科統一。
- **Year2: Specialization** — 系統選択とレポート地獄。Report Queue管理と高専病デバフが核。
- **Year3: Leadership** — 後輩指導と役職によるリソース配分。諏訪野卒業とRoot継承でルートロック。
- **Year4: Society** — インターン、就活準備、研究室見学。5年次配属に向けたGPA戦争。
- **Year5: Legacy** — 研究室配属、卒研3フェーズ（テーマ決定/実験/執筆）。ラスボス教授戦で5年の蓄積を総動員。

## 7. Implementation Status & Next Steps
- **Design**: コア仕様は Markdown で確定。
- **Missing**: GameLoop.md の詳細、JSON データ拡充。
- **Latest Update (2025-12-25)**:
  - 学校設定 (School.md) を追加。長野高専をモデルに「神城工業高等専門学校」を設定。
  - 3系統制（機械ロボティクス系/情報エレクトロニクス系/都市デザイン系）を定義。Year 1は工学科として統一入学、Year 2から系統選択。
  - 寮生活、施設配置、年間行事、教職員の詳細を記述。
  - 後輩キャラクター「春日井 ユズ」を追加 (02_Characters/Yuzu.md)。
- **Next**:
  1. GameLoop.md にメインループの疑似コードと状態遷移を追記。
  2. React/TypeScript (Vite) でプロジェクト初期化。
  3. UI/UX: Student Handbook 風の画面設計。
  4. items.json / subjects.json / events_random.json を拡充しバランス調整。
  5. Time/Memory システムのシミュレーション検証。
  6. 系統別の専門科目データを subjects.json に追加。

## 8. Critical Constraints
- 難易度を下げないこと。赤点・留年・Sanity 枯渇が体験の核。
- Route E は敗北ではなく分岐。どのルートも挫折の先にある。
- Time は最貴重リソース。週次ポリシーが時間配分を決める。Credits=HP。

## 9. Final Note
This project simulates the pain and joy of engineering youth. Every数値とイベントには意図がある。難易度を緩めず、現実感を保ったまま世界を実装せよ。

**End of Protocol.**