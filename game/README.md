# KOSEN Survival Game - Phase 1 Implementation

ビジュアルノベルエンジンの最小限実装（Phase 1）

## ディレクトリ構造

```
game/
├── src/
│   ├── components/       # React コンポーネント
│   │   ├── GameEngine.tsx      # メインゲームエンジン
│   │   ├── CharacterRenderer.tsx
│   │   ├── MessageBox.tsx
│   │   ├── ChoicePanel.tsx
│   │   └── ControlBar.tsx
│   ├── hooks/           # カスタムフック
│   ├── utils/           # ユーティリティ関数
│   │   └── sceneLoader.ts
│   ├── types/           # TypeScript型定義
│   ├── assets/          # 静的アセット（画像など）
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── data/
│       └── scenes_phase1.json  # シーンデータ
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

## セットアップ

### 1. 依存関係のインストール

```bash
cd game
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザが自動で開き、`http://localhost:5173` で実行されます。

### 3. ビルド

```bash
npm run build
```

## 機能（Phase 1）

✅ **立ち絵表示** - キャラの表情・位置・透明度を制御
✅ **メッセージボックス** - テキスト表示（Typewriter effect付き）
✅ **選択肢パネル** - ユーザーが選択肢を選んでシーン遷移
✅ **オート再生** - A キーで自動進行
✅ **スキップ** - S キーで既読シーンを高速化
✅ **シーン管理** - JSON ベースのシーンデータ

## シーンデータの構造

シーンデータは `public/data/scenes_phase1.json` で定義されます。

```json
{
  "characters": {
    "ai": {
      "displayName": "一ノ瀬 アイ",
      "expressions": {
        "normal": "image_url",
        "happy": "image_url"
      }
    }
  },
  "scenes": {
    "scene_001": {
      "id": "scene_001",
      "background": "image_url",
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
          "text": "メッセージ内容",
          "speed": "normal"
        }
      ],
      "choices": {
        "choiceId": "choice_001",
        "choices": [
          {
            "id": "choice_a",
            "label": "選択肢A",
            "nextSceneId": "scene_002_a"
          }
        ]
      }
    }
  }
}
```

## 使用技術

- **React 18** - UI フレームワーク
- **TypeScript** - 型安全性
- **Vite** - ビルドツール
- **CSS** - スタイリング

## 次フェーズへのロードマップ

- **Phase 2**: プレイヤーの状態管理（感情値、好感度）
- **Phase 3**: 複雑なルート分岐ロジック
- **Phase 4**: 時間管理・パラメータシステム統合

## ドキュメント

詳細な設計は以下を参照：
- [TechSpec_Phase1.md](../doc/00_Overview/TechSpec_Phase1.md)
- [GameLoop_Phase1.md](../doc/00_Overview/GameLoop_Phase1.md)
