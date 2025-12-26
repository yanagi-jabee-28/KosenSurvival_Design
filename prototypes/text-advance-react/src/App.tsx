import React, { useEffect, useMemo, useState } from 'react'
import { actions, applyAction, initGameState, loadGameState, restartGame } from './state/game'
import { balance } from './config/balance'
import type { ActionId, GameState, CharacterName } from './state/game'
import CharacterStand from './components/CharacterStand'

export default function App() {
  const [state, setState] = useState<GameState>(() => loadGameState())

  useEffect(() => {
    // state persistence is handled in applyAction/restartGame; keep effect for future side-effects
  }, [state])

  const handleAction = (actionId: ActionId) => {
    if (state.phase !== 'play') return
    setState(s => applyAction(s, actionId))
  }

  const handleRestart = () => {
    setState(restartGame())
  }

  const dayLabel = useMemo(() => {
    const week = state.day <= 7 ? 14 : 15 + Math.floor((state.day - 8) / 7)
    return `W${week} Day${state.day}`
  }, [state.day])

  const slotLabel = ['Morning', 'AM Class', 'Lunch', 'PM Class', 'After School', 'Evening', 'Night'][state.slot] ?? 'Slot'

  const canHelp = state.stats.knowledge >= balance.takeshiLesson.unlock.knowledge &&
    state.stats.proficiency >= balance.takeshiLesson.unlock.proficiency

  return (
    <div className="app cui">
      <header className="header">
        <h1>KosenSurvival W14-W16 Prototype</h1>
        <div className="header-meta">
          <span>{dayLabel}</span>
          <span>Slot: {slotLabel}</span>
        </div>
      </header>

      <div className="layout">
        <section className="console">
          <div className="console-header">
            <span>STATUS</span>
            <span>K:{state.stats.knowledge} P:{state.stats.proficiency} Vit:{state.stats.vitality} San:{state.stats.sanity} Cr:{state.stats.credits}</span>
            <span>Takeshi K:{state.takeshi.knowledge} P:{state.takeshi.proficiency} Prog:{state.takeshi.progress}</span>
          </div>
          <div className="console-log">
            {state.log.map((line, idx) => (
              <div key={idx} className="log-line">{line}</div>
            ))}
          </div>
          {state.phase === 'result' && state.result && (
            <div className="result-panel">
              <div>あなた: {state.result.playerScore}点 ({state.result.playerPass ? '合格' : '赤点'}) / Credits {state.stats.credits}</div>
              <div>タケシ: {state.result.takeshiScore}点 ({state.result.takeshiStay ? '残留' : '自主退学'})</div>
              <button className="cmd-btn" onClick={handleRestart}>リトライ</button>
            </div>
          )}
        </section>

        <section className="command-panel">
          <div className="command-grid">
            {actions.map(action => {
              const disabled = state.phase !== 'play' || (action.id === 'helpTakeshi' && !canHelp)
              return (
                <button
                  key={action.id}
                  className="cmd-btn"
                  disabled={disabled}
                  onClick={() => handleAction(action.id)}
                >
                  {action.label}
                  <small className="cmd-desc">{action.description}{action.id === 'helpTakeshi' && !canHelp ? ' (実力不足)' : ''}</small>
                </button>
              )
            })}
          </div>
          <div className="helper-text">
            行動は1スロット消費。7スロット消費で翌日に進み、14日経過で自動的に前期期末テスト。
          </div>
        </section>

        <section className="stage">
          {state.displayCharacter === 'Takeshi' && <CharacterStand name="Takeshi" width={260} />}
          {state.displayCharacter === 'Ai' && <CharacterStand name="Ai" width={230} />}
        </section>
      </div>

      <footer className="footer">
        <small>CUI Prototype | Balance from config/balance.ts</small>
      </footer>
    </div>
  )
}
