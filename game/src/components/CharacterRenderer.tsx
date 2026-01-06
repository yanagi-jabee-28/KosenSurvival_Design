import { CharacterState } from '@/types'
import './CharacterRenderer.css'

interface CharacterRendererProps {
  characterState: CharacterState
  characterSprite?: {
    displayName: string
    expressions: Record<string, string>
  }
}

export default function CharacterRenderer({
  characterState,
  characterSprite,
}: CharacterRendererProps) {
  if (!characterSprite) {
    return null
  }

  const imageUrl = characterSprite.expressions[characterState.expression]
  if (!imageUrl) {
    return null
  }

  const positionClass = `position-${characterState.position}`
  const scaleTransform = `scale(${characterState.scale})`

  return (
    <div
      className={`character-renderer ${positionClass}`}
      style={{
        opacity: characterState.opacity,
      }}
    >
      <img
        src={imageUrl}
        alt={`${characterSprite.displayName} - ${characterState.expression}`}
        className="character-image"
        style={{
          transform: scaleTransform,
        }}
      />
    </div>
  )
}
