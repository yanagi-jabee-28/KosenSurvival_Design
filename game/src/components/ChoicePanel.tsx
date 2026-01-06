import { Choice } from '@/types'
import './ChoicePanel.css'

interface ChoicePanelProps {
  choices: Choice[]
  onChoice: (nextSceneId: string) => void
  offsetBottom?: number
  inline?: boolean
}

export default function ChoicePanel({ choices, onChoice, offsetBottom, inline = false }: ChoicePanelProps) {
  // Compute dynamic sizing based on number of choices and max text length
  const count = choices.length
  const maxLabelLength = choices.reduce((max, c) => Math.max(max, c.label.length), 0)

  // Base values
  let fontSize = 16
  let padY = 14
  let padX = 20
  let minWidth = 160
  let maxWidth: string | number = 800

  // Adjust for number of choices
  if (count >= 4) {
    fontSize = 15
    padY = 12
    padX = 18
    minWidth = 140
  }
  if (count >= 6) {
    fontSize = 14
    padY = 10
    padX = 14
    minWidth = 120
    maxWidth = 600
  }
  if (count >= 8) {
    fontSize = 13
    padY = 8
    padX = 12
    minWidth = 100
    maxWidth = 480
  }

  // Adjust for long text
  if (maxLabelLength > 60) {
    // allow wrapping and wider max width relative to container
    maxWidth = '90%'
    // slightly increase padding for readability
    padY += 2
    padX += 4
  } else if (maxLabelLength > 30 && maxLabelLength <= 60) {
    maxWidth = 600
  }

  const panelVars: Record<string, string> = {
    ['--choice-font-size']: `${fontSize}px`,
    ['--choice-padding-y']: `${padY}px`,
    ['--choice-padding-x']: `${padX}px`,
    ['--choice-min-width']: `${minWidth}px`,
    ['--choice-max-width']: typeof maxWidth === 'number' ? `${maxWidth}px` : `${maxWidth}`,
  }

  if (inline) {
    return (
      <div className="choice-panel-inline">
        <div className="choice-panel" style={panelVars}>
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
      <div className="choice-panel" style={panelVars}>
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
