import React, { useEffect, useState } from "react"
import MainArea from "./components/MainArea"
import Sidebar from "./components/Sidebar"
import StatusBar from "./components/StatusBar"
import { loadGameState, apply } from "./state/game"

const lines = [
  "春、新しい学期が始まる——",
  "あなたは神城工業高専の一年生。",
  "教室の窓から見える盆地の空。",
  "ここから、日々の物語が動き出す。",
]

export default function App() {
  const [index, setIndex] = useState<number>(() => {
    const v = localStorage.getItem("textAdvanceIndex")
    return v ? Math.min(Number(v), lines.length - 1) : 0
  })
  const [state, setState] = useState(() => loadGameState())

  useEffect(() => {
    localStorage.setItem("textAdvanceIndex", String(index))
  }, [index])

  const next = () => {
    setIndex(i => Math.min(i + 1, lines.length - 1))
  }

  const restart = () => {
    setIndex(0)
  }

  const handleAction = (action: string) => {
    switch (action) {
      case "rest":
        setState(s => apply(s, { vitality: s.stats.vitality + 15, sanity: s.stats.sanity + 10 }))
        break
      case "study":
        setState(s => apply(s, { vitality: s.stats.vitality - 10, sanity: s.stats.sanity - 5, logic: s.stats.logic + 1 }))
        break
      case "work":
        setState(s => apply(s, { vitality: s.stats.vitality - 10, sanity: s.stats.sanity - 5, money: s.stats.money + 3000 }))
        break
      case "social":
        setState(s => apply(s, { vitality: s.stats.vitality - 5, sanity: s.stats.sanity + 10, charisma: s.stats.charisma + 1 }))
        break
    }
    next()
  }

  return (
    <div className="app">
      <header className="header">
        <h1>KosenSurvival Text Prototype</h1>
      </header>

      <StatusBar stats={state.stats} />

      <MainArea
        textLines={lines}
        currentIndex={index}
        onNext={next}
        onRestart={restart}
        onAction={handleAction}
      />

      <Sidebar stats={state.stats} />

      <footer className="footer">
        <small>神城工業高専プロトタイプ - ローカルのみ</small>
      </footer>
    </div>
  )
}
