import { balance } from '../config/balance'
import { Stats, clampStats } from '../types/stats'

export type TakeshiState = {
  knowledge: number
  proficiency: number
  progress: number
}

export type GamePhase = 'play' | 'result'

export type GameState = {
  day: number // 1-14
  slot: number // 0-6
  stats: Stats
  takeshi: TakeshiState
  log: string[]
  phase: GamePhase
  result?: {
    playerScore: number
    playerPass: boolean
    takeshiScore: number
    takeshiStay: boolean
  }
}

export type ActionId = 'selfStudy' | 'buyPastExam' | 'practiceSession' | 'sleep' | 'indulge' | 'helpTakeshi'

export const actions: { id: ActionId; label: string; description: string }[] = [
  { id: 'selfStudy', label: '自習', description: 'K+4 P+6 San-2 Vit-4' },
  { id: 'buyPastExam', label: '過去問を買う', description: 'K+6 P+2 San-3 Vit-2' },
  { id: 'practiceSession', label: '演習会に出る', description: 'K+2 P+7 San-2 Vit-5' },
  { id: 'sleep', label: '睡眠', description: 'San+6 Vit+12 K-2' },
  { id: 'indulge', label: '甘い誘惑に乗る', description: 'San+5 K-3 P-2 Vit-1' },
  { id: 'helpTakeshi', label: 'タケシを手伝う', description: '進捗+1 San-1 Vit-4 P-3+定着+2' },
]

const KEY = 'kosenSurvival_proto_state'

export function initGameState(): GameState {
  const baseLog = [
    'W14: テスト発表。前期期末まで残り2週間。',
    'タケシ救済は自分の学力が一定以上で解放される。',
  ]
  return {
    day: 1,
    slot: 0,
    stats: clampStats({ ...balance.playerInitial }),
    takeshi: { ...balance.takeshiInitial, progress: 0 },
    log: baseLog,
    phase: 'play',
  }
}

export function loadGameState(): GameState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return initGameState()
    const parsed = JSON.parse(raw)
    const parsedStats = parsed.stats ?? {}
    return {
      day: Number(parsed.day) || 1,
      slot: Number(parsed.slot) || 0,
      stats: clampStats({
        knowledge: Number(parsedStats.knowledge ?? balance.playerInitial.knowledge),
        proficiency: Number(parsedStats.proficiency ?? balance.playerInitial.proficiency),
        vitality: Number(parsedStats.vitality ?? balance.playerInitial.vitality),
        sanity: Number(parsedStats.sanity ?? balance.playerInitial.sanity),
        credits: Number(parsedStats.credits ?? balance.playerInitial.credits),
      }),
      takeshi: {
        knowledge: Number(parsed?.takeshi?.knowledge ?? balance.takeshiInitial.knowledge),
        proficiency: Number(parsed?.takeshi?.proficiency ?? balance.takeshiInitial.proficiency),
        progress: Number(parsed?.takeshi?.progress ?? 0),
      },
      log: Array.isArray(parsed.log) ? parsed.log.slice(-50) : [],
      phase: parsed.phase === 'result' ? 'result' : 'play',
      result: parsed.result,
    }
  } catch {
    return initGameState()
  }
}

export function saveGameState(state: GameState) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function computeScore(k: number, p: number) {
  return k * balance.scoreWeights.knowledge + p * balance.scoreWeights.proficiency
}

function takeshiGain(player: Stats) {
  const g =
    balance.takeshiLesson.base +
    Math.floor(player.knowledge / balance.takeshiLesson.scaleKnowledgeDiv) +
    Math.floor(player.proficiency / balance.takeshiLesson.scaleProficiencyDiv)
  return Math.min(balance.takeshiLesson.cap, g)
}

function canHelpTakeshi(stats: Stats) {
  return (
    stats.knowledge >= balance.takeshiLesson.unlock.knowledge &&
    stats.proficiency >= balance.takeshiLesson.unlock.proficiency
  )
}

function clampLog(log: string[]) {
  const MAX = 80
  return log.slice(-MAX)
}

export function applyAction(state: GameState, actionId: ActionId): GameState {
  if (state.phase !== 'play') return state

  const next = { ...state, log: [...state.log] }

  switch (actionId) {
    case 'selfStudy': {
      const eff = balance.actionEffects.selfStudy
      next.stats = clampStats({
        ...next.stats,
        knowledge: next.stats.knowledge + eff.knowledge,
        proficiency: next.stats.proficiency + eff.proficiency,
        vitality: next.stats.vitality + eff.vitality,
        sanity: next.stats.sanity + eff.sanity,
      })
      next.log.push('自習: K+4 / P+6 / San-2 / Vit-4')
      break
    }
    case 'buyPastExam': {
      const eff = balance.actionEffects.buyPastExam
      next.stats = clampStats({
        ...next.stats,
        knowledge: next.stats.knowledge + eff.knowledge,
        proficiency: next.stats.proficiency + eff.proficiency,
        vitality: next.stats.vitality + eff.vitality,
        sanity: next.stats.sanity + eff.sanity,
      })
      next.log.push('過去問を買う: K+6 / P+2 / San-3 / Vit-2')
      break
    }
    case 'practiceSession': {
      const eff = balance.actionEffects.practiceSession
      next.stats = clampStats({
        ...next.stats,
        knowledge: next.stats.knowledge + eff.knowledge,
        proficiency: next.stats.proficiency + eff.proficiency,
        vitality: next.stats.vitality + eff.vitality,
        sanity: next.stats.sanity + eff.sanity,
      })
      next.log.push('演習会: K+2 / P+7 / San-2 / Vit-5')
      break
    }
    case 'sleep': {
      const eff = balance.actionEffects.sleep
      next.stats = clampStats({
        ...next.stats,
        knowledge: next.stats.knowledge + eff.knowledge,
        vitality: next.stats.vitality + eff.vitality,
        sanity: next.stats.sanity + eff.sanity,
      })
      next.log.push('睡眠: San+6 / Vit+12 / K-2')
      break
    }
    case 'indulge': {
      const eff = balance.actionEffects.indulge
      next.stats = clampStats({
        ...next.stats,
        knowledge: next.stats.knowledge + eff.knowledge,
        proficiency: next.stats.proficiency + eff.proficiency,
        vitality: next.stats.vitality + eff.vitality,
        sanity: next.stats.sanity + eff.sanity,
      })
      next.log.push('甘い誘惑: San+5 / K-3 / P-2 / Vit-1')
      break
    }
    case 'helpTakeshi': {
      if (!canHelpTakeshi(next.stats)) {
        next.log.push('タケシを手伝う: まだ実力が足りない…')
        break
      }
      const gain = takeshiGain(next.stats)
      next.takeshi = {
        ...next.takeshi,
        knowledge: next.takeshi.knowledge + gain,
        progress: next.takeshi.progress + 1,
      }
      next.stats = clampStats({
        ...next.stats,
        knowledge: next.stats.knowledge + balance.actionEffects.helpTakeshi.knowledge,
        proficiency: next.stats.proficiency + balance.actionEffects.helpTakeshi.proficiency + balance.takeshiLesson.feedbackProficiency,
        vitality: next.stats.vitality + balance.actionEffects.helpTakeshi.vitality,
        sanity: next.stats.sanity + balance.actionEffects.helpTakeshi.sanity,
      })
      next.log.push(`タケシを手伝う: 進捗+1 / タケシK+${gain} / P定着+${balance.takeshiLesson.feedbackProficiency} / San-1 / Vit-4`)
      break
    }
  }

  advanceTime(next)
  next.log = clampLog(next.log)
  saveGameState(next)
  return next
}

function advanceTime(state: GameState) {
  // advance slot/day, and if finished all days run test
  const nextSlot = state.slot + 1
  if (nextSlot <= 6) {
    state.slot = nextSlot
    return
  }
  state.day += 1
  state.slot = 0

  if (state.day > 14 && state.phase === 'play') {
    const playerScore = Math.round(computeScore(state.stats.knowledge, state.stats.proficiency))
    const playerPass = playerScore >= balance.testPassThreshold
    const takeshiScore = Math.round(computeScore(state.takeshi.knowledge, state.takeshi.proficiency))
    const takeshiStay = takeshiScore >= balance.testPassThreshold

    const credits = state.stats.credits + (playerPass ? 1 : -1)

    state.stats = clampStats({ ...state.stats, credits })
    state.phase = 'result'
    state.result = { playerScore, playerPass, takeshiScore, takeshiStay }
    state.log.push(
      `前期期末 結果: あなた ${playerScore}点 (${playerPass ? '合格' : '赤点'}) / タケシ ${takeshiScore}点 (${takeshiStay ? '残留' : '自主退学'})`
    )
  }
}

export function restartGame(): GameState {
  const fresh = initGameState()
  saveGameState(fresh)
  return fresh
}
