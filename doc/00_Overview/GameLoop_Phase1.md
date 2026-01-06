# Game Loop - Phase 1 (Minimal Visual Novel)

## 概要
Phase 1 では、複雑なゲームロジックを完全に除外し、**純粋なビジュアルノベルエンジン** として動作する。

---

## 1. Main Loop: シーン進行ループ

### ゲームループの最小構成

```
[START]
  ↓
[SceneManager: 初期シーン読込]
  ↓
[LOOP]
  ├─ [描画] Background, Characters, MessageBox を描画
  ├─ [ユーザー入力待機]
  │   ├─ Click / Space → 次メッセージへ
  │   ├─ A キー → オート再生 ON/OFF
  │   ├─ S キー → スキップ ON/OFF
  │   └─ L キー → ログ表示
  ├─ [テキスト表示]
  │   ├─ メッセージを1行ずつ表示（Typewriter Effect）
  │   └─ Backlog に記録
  ├─ [メッセージ終了時]
  │   ├─ 次メッセージがあれば上へ戻る
  │   └─ メッセージなければ選択肢へ
  ├─ [選択肢表示]（存在する場合）
  │   ├─ ChoicePanel 表示
  │   ├─ ユーザー選択待機
  │   └─ nextSceneId へ遷移
  └─ [シーン終了時]
    └─ nextSceneId へ自動遷移 or END
[END]
```

---

## 2. シーンの構造

### 2.1 単一シーン内の処理フロー

```
[Scene Load]
  ├─ ID: "scene_001"
  ├─ Background Image Load
  ├─ Character Sprites Load
  └─ Message Data Load
    ↓
[Display Phase]
  ├─ Background 描画
  ├─ Character 配置（複数キャラ対応は Phase 2）
  └─ MessageBox 初期化
    ↓
[Message Phase] (複数のメッセージを順次処理)
  ├─ Message 1: 表示 + User Click 待機
  ├─ Message 2: 表示 + User Click 待機
  ├─ ...
  └─ Message N: 表示 + User Click 待機
    ↓
[Choice Phase] (選択肢がある場合のみ)
  ├─ ChoicePanel 表示
  ├─ 選択肢 1: Label "..." + nextSceneId
  ├─ 選択肢 2: Label "..." + nextSceneId
  └─ User Selection → 次シーンへ遷移
    ↓
[Scene End] or [Auto Advance to nextSceneId]
```

### 2.2 シーンデータ定義（JSON）

```json
{
  "id": "scene_001",
  "background": "/assets/bg_classroom.png",
  "characters": [
    {
      "name": "ai",
      "expression": "normal",
      "position": "center",
      "scale": 1.0,
      "opacity": 1.0
    }
  ],
  "messages": [
    {
      "characterName": "一ノ瀬 アイ",
      "text": "おはよう。",
      "speed": "normal"
    },
    {
      "characterName": "narrator",
      "text": "彼女は微笑んだ。",
      "speed": "normal"
    }
  ],
  "choices": {
    "choiceId": "choice_001",
    "choices": [
      {
        "id": "choice_a",
        "label": "「おはよう」",
        "nextSceneId": "scene_002_a"
      },
      {
        "id": "choice_b",
        "label": "「...」",
        "nextSceneId": "scene_002_b"
      }
    ]
  },
  "nextSceneId": null
}
```

---

## 3. UI要素の状態遷移

### 3.1 MessageBox の状態
```
[Waiting]
  ↓ (新メッセージ)
[Typing] → テキスト1文字ずつ表示
  ↓ (全文表示完了)
[Ready] → 次メッセージへのクリック待機
  ↓ (User Click or Auto)
[Display Next]
  ↓
  Loop or [Choice]
```

### 3.2 ChoicePanel の状態
```
[Hidden]
  ↓ (すべてのメッセージ終了)
[Show]
  ↓ (Choices List 表示)
[Waiting] → ユーザー選択待機
  ↓ (User Select)
[Transition]
  ↓
[Load Next Scene]
```

---

## 4. ユーザー操作

| 操作 | 動作 | 説明 |
|:---|:---|:---|
| **Click / Space** | 次メッセージ or 選択肢選択 | テキスト送進 |
| **A キー** | オート再生 ON/OFF | テキスト自動進行 |
| **S キー** | スキップ ON/OFF | 既読シーンを高速処理 |
| **L キー** | ログ表示 ON/OFF | 過去メッセージ表示 |
| **↑/↓ Arrow** | 選択肢移動 | キーボード操作時 |
| **Esc / Q** | メニュー表示 | 設定・セーブ |

---

## 5. 制御フロー：簡略版フローチャート

```
START
  │
  ├─→ [Fetch Scene Data by ID]
  │
  ├─→ [Render Background]
  │
  ├─→ [Render Characters]
  │
  ├─→ [LOOP: Message Processing]
  │     ├─ message_idx = 0
  │     ├─ WHILE message_idx < messages.length:
  │     │   ├─ [Render Message]
  │     │   ├─ [Wait User Input]
  │     │   │   ├─ (Click) → next
  │     │   │   ├─ (A pressed) → toggle auto
  │     │   │   ├─ (S pressed) → toggle skip
  │     │   │   └─ (L pressed) → show log
  │     │   └─ message_idx += 1
  │     └─ END
  │
  ├─→ [Check Choices]
  │     ├─ IF choices exist:
  │     │   ├─ [Render ChoicePanel]
  │     │   ├─ [Wait User Selection]
  │     │   └─ nextSceneId = selected_choice.nextSceneId
  │     └─ ELSE:
  │         └─ nextSceneId = scene.nextSceneId
  │
  ├─→ [Load Next Scene]
  │
  └─→ LOOP or END
```

---

## 6. 状態管理（React Context）

### 6.1 GameState
```typescript
interface GameState {
  currentSceneId: string;
  currentMessageIndex: number;
  isAutoPlay: boolean;
  isSkipping: boolean;
  messageBacklog: Message[];
  sceneHistory: string[]; // 訪問したシーンの履歴
}
```

### 6.2 UIState
```typescript
interface UIState {
  isMessageBoxVisible: boolean;
  isChoicePanelVisible: boolean;
  isBacklogVisible: boolean;
  isControlBarVisible: boolean;
  textSpeed: "slow" | "normal" | "fast";
  fontSize: number;
}
```

---

## 7. テスト用サンプルシナリオ

Phase 1 では以下の簡易シナリオを用意：

```
scene_001: オープニング
  ├─ Message: ナレーション「4月。新年度が始まった。」
  ├─ Message: キャラ登場「おはよう」
  └─ Choice: 返事を選ぶ
      ├─ 「おはよう」→ scene_002_a
      └─ 「...」→ scene_002_b

scene_002_a: 選択肢A の展開
  ├─ Message: キャラ「元気だね」
  └─ nextSceneId: scene_003

scene_002_b: 選択肢B の展開
  ├─ Message: キャラ「大丈夫？」
  └─ nextSceneId: scene_003

scene_003: エンディング
  └─ Message: ナレーション「こうして1日が始まった。」
     → END or scene_004へ
```

---

## 8. 次フェーズへの拡張ポイント

### Phase 1 → Phase 2 への移行
1. **複数キャラ同時表示**: CharacterRenderer を複数管理
2. **Player State 導入**: 感情値、好感度などの簡易パラメータ
3. **シーン分岐の統合**: 選択肢による感情値変化の反映
4. **セーブ/ロード機能**: LocalStorage に GameState を保存

### Phase 2 → Phase 3 への移行
1. **時間管理**: Week/Day の進行
2. **複雑なルート分岐**: 複数パラメータに基づく条件判定
3. **ダイナミックシーン**: パラメータに基づきメッセージ内容を動的生成

---

## 進捗

- [ ] シーンデータ JSON スキーマ確定
- [ ] サンプルシナリオ (scene_001 ~ scene_003) 作成
- [ ] React コンポーネント実装
- [ ] オート/スキップ/ログ機能実装
- [ ] ユーザー操作テスト
- [ ] Phase 2 設計開始
