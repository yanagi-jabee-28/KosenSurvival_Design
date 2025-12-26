export const balance = {
  testPassThreshold: 60,
  scoreWeights: { knowledge: 0.3, proficiency: 0.7 },
  playerInitial: {
    knowledge: 30,
    proficiency: 25,
    vitality: 70,
    sanity: 50,
    credits: 1,
  },
  takeshiInitial: {
    knowledge: 35,
    proficiency: 20,
  },
  takeshiLesson: {
    base: 8,
    cap: 15,
    scaleKnowledgeDiv: 20,
    scaleProficiencyDiv: 25,
    feedbackProficiency: 2,
    unlock: { knowledge: 30, proficiency: 25 },
  },
  actionEffects: {
    selfStudy: { knowledge: 4, proficiency: 6, sanity: -2, vitality: -4 },
    buyPastExam: { knowledge: 6, proficiency: 2, sanity: -3, vitality: -2 },
    practiceSession: { knowledge: 2, proficiency: 7, sanity: -2, vitality: -5 },
    sleep: { knowledge: -2, proficiency: 0, sanity: 6, vitality: 12 },
    indulge: { knowledge: -3, proficiency: -2, sanity: 5, vitality: -1 },
    helpTakeshi: { knowledge: 0, proficiency: -3, sanity: -1, vitality: -4 },
  },
  quiz: {
    tierStep: 20,
    rewards: { knowledge: 2, proficiency: 3 },
    penalties: { sanity: -2 },
  },
  sanityLimits: {
    warning: 15,
    min: 0,
  },
}
