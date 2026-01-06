import { Choice } from '@/types'
import './ChoicePanel.css'

interface ChoicePanelProps {
  choices: Choice[]
  onChoice: (nextSceneId: string) => void
  offsetBottom?: number
}

export default function ChoicePanel({ choices, onChoice, offsetBottom }: ChoicePanelProps) {
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
