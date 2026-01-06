import { Choice } from '@/types'
import './ChoicePanel.css'

interface ChoicePanelProps {
  choices: Choice[]
  onChoice: (nextSceneId: string) => void
}

export default function ChoicePanel({ choices, onChoice }: ChoicePanelProps) {
  return (
    <div className="choice-panel-container">
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
