export type Stats = {
  knowledge: number
  proficiency: number
  vitality: number
  sanity: number
  credits: number
}

export function clampStats(s: Stats): Stats {
  return {
    knowledge: Math.max(0, Math.round(s.knowledge)),
    proficiency: Math.max(0, Math.round(s.proficiency)),
    vitality: Math.max(0, Math.min(100, Math.round(s.vitality))),
    sanity: Math.max(0, Math.min(100, Math.round(s.sanity))),
    credits: Math.max(0, Math.round(s.credits)),
  }
}
