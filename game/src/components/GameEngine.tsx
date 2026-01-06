import { useState, useEffect, useRef } from 'react'
import { SceneData } from '@/types'
import { loadSceneData } from '@/utils/sceneLoader'
import CharacterRenderer from './CharacterRenderer.tsx'
import MessageBox from './MessageBox.tsx'
import ChoicePanel from './ChoicePanel.tsx'
import ControlBar from './ControlBar.tsx'
import './GameEngine.css'

export default function GameEngine() {
  const [sceneData, setSceneData] = useState<SceneData | null>(null)
  const [currentSceneId, setCurrentSceneId] = useState('scene_001')
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [isSkipping, setIsSkipping] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // シーンデータの読み込み
  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Loading scene data...')
        const data = await loadSceneData()
        console.log('Scene data loaded:', data)
        setSceneData(data)
        setIsLoading(false)
      } catch (err) {
        console.error('Failed to load scene data:', err)
        setError('Failed to load game data')
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  // オート再生の処理
  useEffect(() => {
    if (!isAutoPlay || !sceneData) return

    const delay = isSkipping ? 100 : 2000
    autoPlayRef.current = setTimeout(() => {
      const scene = sceneData.scenes[currentSceneId]
      if (scene && currentMessageIndex < scene.messages.length) {
        setCurrentMessageIndex(prev => prev + 1)
      } else if (scene?.nextSceneId) {
        handleSceneTransition(scene.nextSceneId)
      } else if (scene?.choices) {
        setIsAutoPlay(false) // 選択肢で自動再生を停止
      }
    }, delay)

    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    }
  }, [isAutoPlay, isSkipping, currentSceneId, currentMessageIndex, sceneData])

  const handleNextMessage = () => {
    if (!sceneData) return
    const scene = sceneData.scenes[currentSceneId]
    if (!scene) return

    if (currentMessageIndex < scene.messages.length - 1) {
      setCurrentMessageIndex(prev => prev + 1)
    } else if (scene.nextSceneId && !scene.choices) {
      // 次のシーンに自動遷移
      handleSceneTransition(scene.nextSceneId)
    }
  }

  const handleSceneTransition = (nextSceneId: string) => {
    setCurrentSceneId(nextSceneId)
    setCurrentMessageIndex(0)
  }

  const handleChoice = (nextSceneId: string) => {
    handleSceneTransition(nextSceneId)
  }

  if (isLoading) {
    return (
      <div className="game-engine loading">
        <div style={{ fontSize: '32px', color: 'white' }}>Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="game-engine error">
        <div style={{ fontSize: '32px', color: 'red' }}>{error}</div>
      </div>
    )
  }

  if (!sceneData) {
    return (
      <div className="game-engine error">
        <div style={{ fontSize: '32px', color: 'yellow' }}>No scene data loaded</div>
      </div>
    )
  }

  const scene = sceneData.scenes[currentSceneId]
  if (!scene) {
    return (
      <div className="game-engine error">
        <div style={{ fontSize: '32px', color: 'orange' }}>Scene not found: {currentSceneId}</div>
      </div>
    )
  }

  const isMessageComplete = currentMessageIndex >= scene.messages.length

  return (
    <div className="game-engine">
      {/* 背景 */}
      <div className="scene-background" style={{
        backgroundImage: scene.background ? `url(${scene.background})` : 'none',
      }} />

      {/* キャラクター立ち絵 */}
      <div className="characters-layer">
        {scene.characters.map((char, idx) => (
          <CharacterRenderer
            key={idx}
            characterState={char}
            characterSprite={sceneData.characters[char.name]}
          />
        ))}
      </div>

      {/* メッセージボックス */}
      {scene.messages.length > 0 && (
        <MessageBox
          message={scene.messages[currentMessageIndex]}
          isComplete={isMessageComplete}
          onAdvance={handleNextMessage}
          isSkipping={isSkipping}
        />
      )}

      {/* 選択肢パネル */}
      {isMessageComplete && scene.choices && (
        <ChoicePanel
          choices={scene.choices.choices}
          onChoice={handleChoice}
        />
      )}

      {/* コントロールバー */}
      <ControlBar
        isAutoPlay={isAutoPlay}
        isSkipping={isSkipping}
        onToggleAuto={() => setIsAutoPlay(!isAutoPlay)}
        onToggleSkip={() => setIsSkipping(!isSkipping)}
      />
    </div>
  )
}
