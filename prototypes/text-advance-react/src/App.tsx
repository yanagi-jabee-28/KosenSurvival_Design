import React, { useEffect, useState } from 'react'
import StatusPanel from './components/StatusPanel'
import { loadGameState, apply } from './state/game'

const lines = [
  '春、新しい学期が始まる——',
  'あなたは神城工業高専の一年生。',
  '教室の窓から見える盆地の空。',
  'ここから、日々の物語が動き出す。'
]

export default function App() {
  const [index, setIndex] = useState<number>(() => {
    const v = localStorage.getItem('textAdvanceIndex')
    return v ? Math.min(Number(v), lines.length - 1) : 0
  })
  const [auto, setAuto] = useState(false)
  const [speed, setSpeed] = useState(1500) // ms
  const [state, setState] = useState(() => loadGameState())

  useEffect(() => {
    localStorage.setItem('textAdvanceIndex', String(index))
  }, [index])

  useEffect(() => {
    if (!auto) return
    if (index >= lines.length - 1) return
    const id = setInterval(() => {
      setIndex(i => Math.min(i + 1, lines.length - 1))
    }, speed)
    return () => clearInterval(id)
  }, [auto, index, speed])

  const restart = () => {
    setIndex(0)
    setAuto(false)
  }

  const next = () => {
    setIndex(i => Math.min(i + 1, lines.length - 1))
  }

  const atEnd = index >= lines.length - 1

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (atEnd) restart()
        else next()
      }
      if (e.key.toLowerCase() === 'a') setAuto(a => !a)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [atEnd])

  return (
    <div className="app">
      <header className="header">
        <h1>KosenSurvival Text Prototype</h1>
      </header>
      <main className="main">
        <div className="panel">
          <p className="text">{lines[index]}</p>
        </div>
        <div className="controls">
          <button onClick={next} disabled={atEnd}>次へ</button>
          <button onClick={restart}>最初から</button>
          <label className="auto">
            <input type="checkbox" checked={auto} onChange={e => setAuto(e.target.checked)} />
            自動送り
          </label>
          <label className="speed">
            速度
            <select value={speed} onChange={e => setSpeed(Number(e.target.value))}>
              <option value={1000}>速い</option>
              <option value={1500}>ふつう</option>
              <option value={2500}>ゆっくり</option>
            </select>
          </label>
        </div>
        <div className="hint">
          Space/Enter: 送る ・ A: 自動切替
        </div>

        <StatusPanel stats={state.stats} />

        <section style={{ marginTop: 16 }}> 
          <h2 style={{ fontSize: '1rem', margin: 0, color: '#333' }}>行動</h2>
          <div className="controls" style={{ marginTop: 8 }}>
            <button onClick={() => setState(s => apply(s, { vitality: s.stats.vitality + 15, sanity: s.stats.sanity + 10 }))}>休む</button>
            <button onClick={() => setState(s => apply(s, { vitality: s.stats.vitality - 10, sanity: s.stats.sanity - 5, logic: s.stats.logic + 1 }))}>勉強</button>
            <button onClick={() => setState(s => apply(s, { vitality: s.stats.vitality - 10, sanity: s.stats.sanity - 5, money: s.stats.money + 3000 }))}>アルバイト</button>
            <button onClick={() => setState(s => apply(s, { vitality: s.stats.vitality - 5, sanity: s.stats.sanity + 10, charisma: s.stats.charisma + 1 }))}>交流する</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <small>神城工業高専プロトタイプ - ローカルのみ</small>
      </footer>
    </div>
  )
}
