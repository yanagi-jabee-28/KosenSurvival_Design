import { BaseStats, clampBase, defaultBaseStats } from '../types/stats'

export type GameState = {
  stats: BaseStats
}

const KEY = 'kosenSurvival_baseStats'

export function loadGameState(): GameState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { stats: defaultBaseStats }
    const obj = JSON.parse(raw)
    const stats = clampBase({
      vitality: Number(obj?.stats?.vitality ?? obj?.vitality ?? defaultBaseStats.vitality),
      sanity: Number(obj?.stats?.sanity ?? obj?.sanity ?? defaultBaseStats.sanity),
      money: Number(obj?.stats?.money ?? obj?.money ?? defaultBaseStats.money),
      logic: Number(obj?.stats?.logic ?? obj?.logic ?? defaultBaseStats.logic),
      charisma: Number(obj?.stats?.charisma ?? obj?.charisma ?? defaultBaseStats.charisma),
      karma: Number(obj?.stats?.karma ?? obj?.karma ?? defaultBaseStats.karma),
    })
    return { stats }
  } catch {
    return { stats: defaultBaseStats }
  }
}

export function saveGameState(state: GameState) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function apply(state: GameState, delta: Partial<BaseStats>): GameState {
  const next: GameState = { stats: clampBase({ ...state.stats, ...delta }) }
  saveGameState(next)
  return next
}
