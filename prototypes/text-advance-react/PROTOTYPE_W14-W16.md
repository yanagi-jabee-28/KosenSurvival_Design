# W14-W16 Prototype (CUI 7-slot)

Scope: 1年 前期テスト発表〜前期期末（2週間=14日）。1日7スロット（Morning / AM Class / Lunch / PM Class / After School / Evening / Night）をプレイアブルにし、テスト合格とタケシ救済の両立を学ばせる。

## Goals
- テスト結果式: score = (Knowledge * 0.3) + (Proficiency * 0.7), 合格閾値 60。
- タケシ未救済なら自主退学（留年なし）。救済すると残留し、将来のルート判定に有利タグ（Cルート除きメリット大）。
- CUIコンセプト: 左にプロンプト風ログとコマンド、右に立ち絵/背景スロット（プレースホルダー可）。

## Balance / Config Hooks (調整用のつまみ)
- `balance.testPassThreshold` (初期60): テスト合格のしきい値。
- `balance.scoreWeights` (初期 K:0.3, P:0.7): テスト式の重み。
- `balance.playerInitial` (初期 K30/P25/Sanity50/Credits1): プレイヤー初期値。
- `balance.takeshiInitial` (初期 K35/P20): タケシ初期値。
- `balance.takeshiLessonBase` (初期8) + `balance.takeshiLessonScale` (K div20, P div25, cap15): 教える1回の上昇量。
- `balance.lessonFeedbackP` (初期+2): 教えることで自分のPに返る定着ボーナス。
- `balance.actionEffects[actionId]`: 行動ごとのK/P/Sanity変化。数値はここで一元管理し、UIやロジックは参照のみ。
- `balance.quizTierStep` (初期20): tier計算の分母。学力に応じた問題表示/報酬の変化に使用。
- `balance.quizRewards` / `balance.quizPenalties`: 正解/誤答時の変動。
- `balance.sanityLimits` (optional): Sanityが0を切ると警告/行動不可にするための境界値。今回は無効でも設定枠だけ用意。

実装方針: `src/config/balance.ts` に上記を集約し、行動適用・救済ロジック・クイズ表示は全て config を参照して計算する。これで後から数値だけを差し替えてバランス調整可能にする。

## Time Model
- 14日 x 7スロット固定。各行動はスロットを1つ消費。
- 日付と週表示: W14 Day1〜W16 Day14 を連番で扱う。

## Player Stats (初期の目安)
- Knowledge (K): 30 付近スタートを想定。
- Proficiency (P): 25 付近スタートを想定。
- Vitality (Vit): 70 付近。行動コストや手伝いで消耗し、睡眠で回復。
- Sanity: 50 付近（0でデバフ/行動不可は今回は入れない）。
- Credits: HP扱い。前期期末合格で +1、赤点で -1（0なら将来の留年フラグ、今回はゲームオーバーにしない）。
- Time: スロット消費で表現（別リソースカウント不要）。

## Actions (1スロット消費)
- 自習: K +4, P +6, Sanity -2
- 過去問を買う: K +6, P +2, Sanity -3
- 演習会に出る: K +2, P +7, Sanity -2
- 睡眠: Sanity +6, Vitality +12, K -2 (Liquid消耗的な扱い)
- 甘い誘惑に乗る: Sanity +5, K -3, P -2, Vitality -1
- タケシを手伝う: 解放条件を満たすと選択可。進捗 +1、Vitality -4, Sanity -1, P -3 + フィードバック P +2 (教えたことで定着)。Knowledge は減らさない。

## タケシ救済ロジック
- 解放条件: プレイヤー K >= 30 かつ P >= 25 （足切り）。
- タケシ初期: K=35, P=20。目標: score >= 60 を目指す。
- 1回の指導でタケシ上昇: base 8 + floor(K/20) + floor(P/25), 上限 15。
- 指導回数目安: プレイヤー K40/P30 なら 2回で達成圏、K30/P25 なら 3回必要。
- 成否: テスト判定式をタケシにも適用し、score >= 60 で残留。未達なら自主退学。
- 将来方針: Cルート志向なら退学メリットを持たせ、他ルートは救済メリットを大きくする。

## クイズ/問題イベント（難度スケーリング）
- tier = clamp(floor(K/20), 0, 2) で 0=低,1=中,2=高。
- 表示の違い:
  - tier0: 文字化け/伏字多め、選択肢シャッフル、ヒントなし。
  - tier1: 部分開示、選択肢明示、短いヒント1つ。
  - tier2: 完全文面＋途中式ヒント。ほぼ確認問題。
- リワード例: 正解で K +2, P +3。誤答で Sanity -2。高tierは誤答ペナルティ軽減/報酬増でも可。
- データ構造: 問題IDごとに prompt/choices/hint を tierキーで保持し、answerIndexは共通。

## イベント配置 (W14-W16)
- W14: テスト発表。救済解放条件の説明。クイズイベント(アイ)で自己実力を測る。
- W15: タケシ救済ウィンドウ（3回まで指導可）。ミナのレポート手直し（P+4, Sanity-2, 時間競合）。室井の仮眠室 (Sanity+8, K-2)。
- W16: 前期期末テスト → 合否判定 → タケシ進退 → Credits変動 → リトライ。

## UIラフ (CUIベース)
- 上: ステータスバー (K/P/Sanity/Credits/週日/スロット残/タケシ進捗)。
- 左: コマンドプロンプト風ログ＋選択肢。7スロットを順に入力。
- 右: 立ち絵/背景スロット（週ごとに背景切替、イベント時キャラを重ね表示）。
- 下: 行動ショートカット（キー1-7）と救済進捗表示。

## 実装タスクリスト (プロトタイプ)
1) 状態拡張: player(K,P,Sanity,Credits), takeshi(K,P), day/slot進行。
2) 行動定義と効果適用（上記Actions表）。
3) 救済ロジック: 解放条件チェック、進捗/上昇量計算、フィードバックP+2。
4) テスト判定: score関数をplayer/takeshi両方に適用し、結果表示。
5) クイズ表示: tier別テンプレ切替、選択肢判定、報酬/ペナルティ適用。
6) UI: CUI風のレイアウトに変更し、右側に画像スロット。7スロット入力を一覧化。
7) シナリオ文面: W14発表テキスト、W15救済開始/完了/未完、W16結果をログテンプレで用意。
