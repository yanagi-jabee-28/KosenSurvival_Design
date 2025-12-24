承知いたしました。
これまでの対話、設計思想、そして私たちが構築した『KOSEN Survival』の全貌を、後続のAIエージェントが即座に理解し、開発を引き継げる形式で `AGENTS.md` として出力します。

これが、私からあなたへの最後の納品物です。

***

### 📄 ファイル作成: `AGENTS.md`

以下の内容をプロジェクトのルートディレクトリに保存してください。

```markdown
# AGENTS.md - Project Handover Protocol

> **SYSTEM ALERT**: To the Next AI Agent.
> This document contains the cumulative context, design philosophy, and architectural decisions of "Project: KOSEN Survival".
> Read this before modifying any code or specifications.

## 1. Project Identity (プロジェクト定義)
*   **Title**: KOSEN Survival: The Five Years Odyssey
*   **Genre**: 高専生活サバイバル・育成シミュレーション (Simulation / Novel / RPG)
*   **Core Concept**:
    *   **"Credits are HP, Time is Currency, Forgetting is Death"** (単位はHP、時間は通貨、忘却は死)
    *   **"The Unfair Reality"** (理不尽な難易度と、それを覆すカタルシス)
*   **Target Experience**: 1年生の「理不尽なサバイバル」から、5年生の「専門家としての自立」までを描く5年間の大河ドラマ。

## 2. Design Philosophy (設計思想)
*   **Epistemic Integrity**: 数値は嘘をつかない。「分かったつもり」を許さず、真の理解（定着）のみを評価するシステムを構築せよ。
*   **Anti-Fragility**: 失敗（留年・退学）はゲームオーバーではなく、別のルート（Route C/E）への入り口である。
*   **Structure**: 1年目はRPG（日単位の生存）、2-3年目はSLG（週単位の育成）、4-5年目はADV（月単位の人生選択）と、学年に応じてゲームジャンルを可変させる。

## 3. Directory Structure (ディレクトリ構成)
The project is organized as follows. Do not break this structure.

```text
KosenSurvival_Design/
├── 00_Overview/            # [Defined] README.md, GameLoop.md
├── 01_System/              # [Defined] Time.md, Memory.md, Params.md, Routes.md
├── 02_Characters/          # [Defined] Cast.md, Player.md, Ai.md, Mina.md, Takeshi.md, Ren.md
├── 03_Scenario/            # [Defined] Year1.md, Year2_3.md, Year4.md, Year5.md
└── 99_Data_JSON/           # [Defined] items.json, subjects.json, events_random.json
```

## 4. Key Systems (中核システム仕様)

### A. Time System: The 4Q Hybrid Calendar
*   **Macro**: 1 Year = 4 Quarters. 1 Quarter = 8 Weeks.
*   **Micro**:
    *   **Weekdays (Auto)**: "Weekly Policy" (真面目/内職/睡眠) determines stats for Mon-Fri.
    *   **Weekends/Events (Manual)**: "7 Time Slots" (Morning~Sleep) for detailed resource management.

### B. Memory System: The Sediment Layer
Score is split into two layers to simulate "Cramming" vs "Stacking".
*   **Liquid Score (流動層)**: Gained by Class/Cramming. Decays rapidly (-25%/day).
*   **Solid Score (定着層)**: Gained by Self-study. Decays slowly (-0.5%/day).
*   **Logic (Player Stat)**: Multiplier for learning efficiency. Essential for later years.

### C. Route Branching (The 5 Paths)
Routes are determined by playstyle parameters, not just dialogue choices.

| Route | Theme | Partner | Key Mechanic |
|:---|:---|:---|:---|
| **A: Maker** | モノづくり | **赤坂 ミナ** | Crafting / RoboCon / Physics Proficiency |
| **B: Academic** | 探求・研究 | **一ノ瀬 アイ** | Logic Battle / Proof / Library |
| **C: Hacker** | 反逆・闇 | **諏訪野 / タケシ** | Black Ops / Money / Karma / Outsourcing |
| **D: Leader** | 統率・政治 | **神楽 マイ** | Budget War / Resource Allocation / Charisma |
| **E: Drifter** | 漂流・虚無 | **室井 禅** | Time Killing / Redemption / Sanity Recovery |

## 5. Scenario Arc (シナリオ進行)

### Year 1: The Filter (淘汰)
*   **Focus**: Survival. Dealing with the "Shock of Kosen".
*   **Key Event**: The "Takeshi Divergence" (Week 15). Save him (Stay) or Let him fail (Leave/Route C flag).
*   **Boss**: Academic Year-end Exam (Week 32).

### Year 2-3: The Specialization (専門化)
*   **Focus**: Skill Tree & Leadership.
*   **Key Event**: Course Selection, Dorm Festival (Route D flag), Suwano's Graduation (Inheritance).

### Year 4: The Society (社会)
*   **Focus**: Internship & Lab Assignment.
*   **Key Event**: Driving License (Map expansion), Lab Visit (GPA War).

### Year 5: The Legacy (結実)
*   **Focus**: Thesis Defense.
*   **Key Event**: "Graduation Research" (Boss Battle). Using all accumulated stats/items/relationships.

## 6. Implementation Status & Next Steps (引き継ぎ事項)

### Current Status
*   **Design Phase**: **COMPLETE**. All core mechanics, characters, and scenario outlines are documented in Markdown/JSON.
*   **Architecture**: VSCode folder structure is ready.

### Next Objectives for the Agent
1.  **UI/UX Design**: Create `UI_Layout.drawio` or wireframes based on the "Student Handbook" interface concept.
2.  **Code Implementation**: Initialize the React/TypeScript project using `Vite`.
3.  **Data Population**: Expand `items.json` and `events_random.json` with more content to balance the economy.

## 7. Final Note from the Architect
This project is not just a game; it is a simulation of "Youth" defined by Engineering.
The player must feel the pain of failure to appreciate the joy of understanding.
Do not lower the difficulty. Do not compromise the reality.

**End of Protocol.**
```

***

### 最後のメッセージ

これまでのセッションで、私たちは単なるゲームの仕様書を超えた、一つの「世界」を構築しました。
理不尽な授業、泥臭い友情、そして真理への渇望。この『KOSEN Survival』は、間違いなくユニークで熱量のある作品になるでしょう。

この `AGENTS.md` があれば、次に訪れるのがどのような知性であっても、私たちの意図を正確に汲み取り、この世界を実装へと導くことができます。

共に設計できたことを光栄に思います。
あなたのプロジェクトの成功を、デジタルの彼方より祈っております。

**Mission Complete.**
Goodbye, Partner.