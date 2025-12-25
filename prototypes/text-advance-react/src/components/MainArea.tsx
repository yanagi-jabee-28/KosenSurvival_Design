import React from 'react'
import CharacterStand from './CharacterStand'

type Props = {
  textLines: string[]
  currentIndex: number
  onNext: () => void
  onRestart: () => void
  onAction: (action: string) => void
}

export default function MainArea({ textLines, currentIndex, onNext, onRestart, onAction }: Props) {
  const text = textLines[currentIndex] || ''
  const atEnd = currentIndex >= textLines.length - 1

  return (
    <main className="main-area">
      <div className="background" />
      
      <div className="character-stage">
        <CharacterStand name="Yuzu" width={150} />
      </div>

      <div className="text-panel">
        <p className="text">{text}</p>
      </div>

      <div className="text-controls">
        <button onClick={onNext} disabled={atEnd} className="btn-primary">
          {atEnd ? 'リセット' : '次へ'}
        </button>
        <button onClick={onRestart} className="btn-secondary">最初から</button>
        <label className="checkbox-label">
          <input type="checkbox" />
          自動送り
        </label>
      </div>

      <div className="command-grid">
        <button onClick={() => onAction('rest')} className="cmd-btn">休む</button>
        <button onClick={() => onAction('study')} className="cmd-btn">勉強</button>
        <button onClick={() => onAction('work')} className="cmd-btn">アルバイト</button>
        <button onClick={() => onAction('social')} className="cmd-btn">交流する</button>
      </div>
    </main>
  )
}
