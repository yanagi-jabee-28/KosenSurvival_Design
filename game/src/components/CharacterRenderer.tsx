import { CharacterState } from '@/types'
import './CharacterRenderer.css'

interface CharacterRendererProps {
  characterState: CharacterState
  characterSprite?: {
    displayName: string
    expressions: Record<string, string>
  }
  bottomOffset?: number
}

export default function CharacterRenderer({
  characterState,
  characterSprite,
  bottomOffset = 0,
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
        bottom: bottomOffset,
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
