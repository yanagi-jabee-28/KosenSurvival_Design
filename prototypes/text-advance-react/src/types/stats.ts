export type BaseStats = {
  vitality: number // 0-100
  sanity: number // 0-100
  money: number // >=0 (JPY)
  logic: number // 1-99
  charisma: number // 1-50
  karma: number // 0-100
}

export const defaultBaseStats: BaseStats = {
  vitality: 70,
  sanity: 70,
  money: 10000,
  logic: 1,
  charisma: 1,
  karma: 0,
}

export function clampBase(s: BaseStats): BaseStats {
  return {
    vitality: Math.max(0, Math.min(100, s.vitality)),
    sanity: Math.max(0, Math.min(100, s.sanity)),
    money: Math.max(0, Math.round(s.money)),
    logic: Math.max(1, Math.min(99, Math.round(s.logic))),
    charisma: Math.max(1, Math.min(50, Math.round(s.charisma))),
    karma: Math.max(0, Math.min(100, Math.round(s.karma))),
  }
}
