import { Choice } from '@/types'
import './ChoicePanel.css'

interface ChoicePanelProps {
  choices: Choice[]
  onChoice: (nextSceneId: string) => void
  offsetBottom?: number
  inline?: boolean
}

export default function ChoicePanel({ choices, onChoice, offsetBottom, inline = false }: ChoicePanelProps) {
  if (inline) {
    return (
      <div className="choice-panel-inline">
        <div className="choice-panel">
          {choices.map((choice, idx) => (
            <button
              key={choice.id}
              className="choice-button"
              onClick={() => onChoice(choice.nextSceneId)}
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {choice.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="choice-panel-container" style={{ bottom: offsetBottom ?? 200 }}>
      <div className="choice-panel">
        {choices.map((choice, idx) => (
          <button
            key={choice.id}
            className="choice-button"
            onClick={() => onChoice(choice.nextSceneId)}
            style={{
              animationDelay: `${idx * 0.1}s`,
            }}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  )
}
