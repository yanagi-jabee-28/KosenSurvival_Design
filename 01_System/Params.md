# パラメータ設計 (Global Stats)

## 1. プレイヤー能力 (Base Specs)

| パラメータ | 範囲 | 説明 |
|:---|:---:|:---|
| **Vitality (体力)** | 0-100 | 行動コスト(HP)。0になると「入院」で1週間スキップ。 |
| **Sanity (メンタル)** | 0-100 | 精神衛生。低いとコマンド拒否やバッドイベント発生。 |
| **Money (資金)** | ¥0~ | アイテム購入、Cルートでの解決手段。 |
| **Logic (地頭)** | Lv 1-99 | **学習効率の倍率**。高いほど短時間の勉強でスコアが伸びる。 |
| **Charisma (人望)** | Lv 1-50 | 他人を動かす力。Dルートや3年生以降のチーム運営で必須。 |
| **Karma (業)** | 0-100 | 悪行値。高いと「退学リスク」増。 Cルート突入条件。 |

## 2. 科目パラメータ (Subject Stats)

| パラメータ | 説明 |
|:---|:---:|
| **Understanding (理解度)** | 授業で上昇。「実力」の上限キャップとなる。 |
| **Proficiency (実力)** | 自習・演習で上昇。実際のテストの攻撃力。 |
| **Layer (地層)** | Liquid / Soft / Firm / Diamond の構成比率。 |

## 3. ルート分岐フラグ (Route Flags)

*   **Engineering Flag**: 「モノづくり」回数、ミナ親密度。 → Route A
*   **Academic Flag**: 図書館利用回数、アイ親密度、Logicレベル。 → Route B
*   **Underground Flag**: Karma値、タケシ/諏訪野との取引回数。 → Route C
*   **Management Flag**: 学生会イベント成功数、Charismaレベル。 → Route D
*   **Drifter Flag**: 上記フラグが全て低い、または室井親密度MAX。 → Route E

