# TechSpec: Phase 1 - Minimal Visual Novel Engine

## 概要
**Phase 1** では、複雑なゲームロジックを一切排除し、ビジュアルノベルの最小限機能のみを実装する。

### スコープ
- ✅ 立ち絵表示（キャラ、表情、位置制御）
- ✅ メッセージウィンドウ（テキスト表示、オート/スキップ）
- ✅ 選択肢パネル（複数選択肢の表示と選択）
- ✅ シーン管理（次のシーンへの遷移）
- ✅ シーンデータの外部化（JSON/YAML）
- ❌ パラメータ管理
- ❌ 時間管理
- ❌ メモリシステム
- ❌ ルート分岐ロジック

---

## 1. 技術スタック

| 層 | 技術 | 備考 |
|:---|:---|:---|
| **Frontend** | React 18 + TypeScript | UI コンポーネント |
| **Build** | Vite | 高速開発環境 |
| **State** | useState / useContext | 簡易的な状態管理 |
| **Styling** | CSS Modules / Tailwind | UI スタイリング |
| **Data** | JSON | シーン定義、キャラ情報 |

---

## 2. コンポーネント設計

### 2.1 Application Root
```
App
├── GameEngine
│   ├── CharacterRenderer（立ち絵）
│   ├── MessageBox（メッセージ）
│   ├── ChoicePanel（選択肢）
│   ├── ControlBar（オート/スキップボタン）
│   └── SceneManager（シーン状態管理）
```

### 2.2 CharacterRenderer
**責務**: キャラ立ち絵の表示制御

```typescript
interface CharacterState {
  name: string;           // e.g. "ai", "mina"
  expression: string;     // e.g. "happy", "sad"
  position: "left" | "center" | "right";
  scale: number;         // 0.5 ~ 1.5
  opacity: number;       // 0 ~ 1
}

interface CharacterSprite {
  characterId: string;
  expressions: Record<string, string>; // { "happy": "/path/to/image.png" }
}
```

### 2.3 MessageBox
**責務**: テキスト表示、速度制御

```typescript
interface Message {
  characterName: string; // 話者名（ナレーション時は "narrator"）
  text: string;         // 1行のテキスト
  speed: "slow" | "normal" | "fast"; // 表示速度
}
```

**機能**:
- テキストの段階的な表示（Typewriter Effect）
- クリックで次のメッセージへ進む
- Backlog: 過去のメッセージをスクロール表示

### 2.4 ChoicePanel
**責務**: 複数選択肢の表示

```typescript
interface Choice {
  id: string;
  label: string;       // 表示テキスト
  nextSceneId: string; // 選択後のシーンID
}

interface ChoiceNode {
  choiceId: string;
  choices: Choice[];
}
```

### 2.5 SceneManager
**責務**: シーン遷移、状態管理

```typescript
interface Scene {
  id: string;
  background?: string;    // 背景画像URL
  characters: CharacterState[]; // 立ち絵情報
  messages: Message[];    // メッセージ列
  choices?: ChoiceNode;   // 選択肢（なければ自動で次のシーンへ）
  nextSceneId?: string;   // 自動遷移時の次シーンID
}

interface SceneData {
  scenes: Record<string, Scene>;
}
```

---

## 3. シーンデータ形式（JSON）

### 3.1 基本構造

```json
{
  "scenes": {
    "scene_001": {
      "id": "scene_001",
      "background": "/assets/bg_classroom.png",
      "characters": [
        {
          "name": "ai",
          "expression": "normal",
          "position": "left",
          "scale": 1.0,
          "opacity": 1.0
        }
      ],
      "messages": [
        {
          "characterName": "一ノ瀬 アイ",
          "text": "おはよう。昨日の宿題、やった？",
          "speed": "normal"
        },
        {
          "characterName": "narrator",
          "text": "アイが無表情で聞く。",
          "speed": "normal"
        }
      ],
      "choices": {
        "choiceId": "choice_001",
        "choices": [
          {
            "id": "choice_a",
            "label": "「もちろん。完璧だよ」",
            "nextSceneId": "scene_002_a"
          },
          {
            "id": "choice_b",
            "label": "「ダメ。忘れてた...」",
            "nextSceneId": "scene_002_b"
          }
        ]
      }
    }
  }
}
```

---

## 4. 状態遷移図

```
START
  ↓
[SceneManager]
  ├─ シーン ID 取得
  ├─ Scene データ読込
  ├─ Background 表示
  ├─ Characters 配置
  ├─ Messages 表示
  │   ├─ (ユーザークリック)
  │   └─ 次メッセージへ
  ├─ Choices 表示（あれば）
  │   ├─ (ユーザー選択)
  │   └─ nextSceneId へ遷移
  └─ Choices なければ nextSceneId へ自動遷移
    ↓
  END or LOOP
```

---

## 5. ユーザーインタラクション

### 5.1 キーボード / マウス
| 操作 | 動作 |
|:---|:---|
| **Click / Space** | メッセージ送進, 選択肢選択 |
| **A キー** | オート再生 ON/OFF |
| **S キー** | スキップモード ON/OFF |
| **L キー** | ログ表示 |
| **↑/↓** | 選択肢の上下移動（キーボード操作時） |

### 5.2 UI 要素
- **ControlBar**: Auto / Skip / Log / Settings ボタン
- **Speed Slider**: テキスト表示速度調整
- **Backlog Panel**: 過去のメッセージ一覧

---

## 6. サンプル実装フロー

### Step 1: JSON シーンデータ作成
```bash
doc/99_Data_JSON/scenes_phase1.json
```

### Step 2: React コンポーネント実装
```bash
src/
├── components/
│   ├── GameEngine.tsx
│   ├── CharacterRenderer.tsx
│   ├── MessageBox.tsx
│   ├── ChoicePanel.tsx
│   └── ControlBar.tsx
├── hooks/
│   ├── useSceneManager.ts
│   └── useAutoPlay.ts
├── utils/
│   ├── sceneLoader.ts
│   └── characterRegistry.ts
└── assets/
    ├── characters/
    ├── backgrounds/
    └── scenes.json
```

### Step 3: 最小シナリオテスト
- シーン 3-5 個のミニシナリオを用意
- 選択肢分岐 2-3 パターン
- キャラ 1-2 名（簡易版）

---

## 7. Phase 1 の制限と次フェーズへの拡張ポイント

### 制限事項
- **単一キャラのみ**: 同時に複数キャラの立ち絵は表示しない（後に対応）
- **分岐の統合なし**: 選択後の影響を後のシーンに自動的には反映しない
- **パラメータ非保存**: 感情値やステータスは記録しない

### 次フェーズへの拡張
- **Phase 2**: Player State (感情値/好感度) を JSON に統合
- **Phase 3**: ルート分岐判定ロジック
- **Phase 4**: 時間管理・パラメータシステム統合

---

## 8. ファイル構成（変更予定）

```
doc/
├── 00_Overview/
│   ├── GameLoop.md         ← Phase 1 版に簡略化
│   ├── TechSpec_Phase1.md  ← このファイル
│   └── UI_Layout_Design.md
├── 99_Data_JSON/
│   ├── scenes_phase1.json  ← Phase 1 用シーンデータ
│   └── characters.json     ← キャラ基本情報
```

---

## 進捗追跡

- [ ] シーン JSON スキーマ確定
- [ ] サンプル シーンデータ作成（scene_001 - scene_005）
- [ ] React コンポーネント実装
- [ ] ユーザーテスト（基本操作）
- [ ] Phase 2 計画策定
