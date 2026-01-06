import React, { useState, useEffect, useRef } from 'react'
import { SceneData } from '@/types'
import { loadSceneData } from '@/utils/sceneLoader'
import CharacterRenderer from './CharacterRenderer.tsx'
import MessageBox from './MessageBox.tsx'
import ChoicePanel from './ChoicePanel.tsx'
import './GameEngine.css' 

export default function GameEngine() {
  const [sceneData, setSceneData] = useState<SceneData | null>(null)
  const [currentSceneId, setCurrentSceneId] = useState('scene_001')
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [messageBoxHeight, setMessageBoxHeight] = useState(0)

  // メッセージが存在しないときは高さを 0 に戻す（選択肢表示時など）
  useEffect(() => {
    if (!sceneData) {
      setMessageBoxHeight(0)
      return
    }
    const scene = sceneData.scenes[currentSceneId]
    if (!scene) {
      setMessageBoxHeight(0)
      return
    }
    const currentMessage = scene.messages[currentMessageIndex] ?? null
    if (!currentMessage) setMessageBoxHeight(0)
  }, [sceneData, currentSceneId, currentMessageIndex])

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



  const handleNextMessage = () => {
    if (!sceneData) return
    const scene = sceneData.scenes[currentSceneId]
    if (!scene) return

    // If there are more messages, show the next one
    if (currentMessageIndex < scene.messages.length - 1) {
      setCurrentMessageIndex(prev => prev + 1)
      return
    }

    // We're at (or after) the last message
    if (scene.choices) {
      // Move index past last message to indicate 'messages complete' and show choices
      setCurrentMessageIndex(prev => prev + 1)
      return
    }

    if (scene.nextSceneId) {
      // No choices and has next scene: transition immediately
      handleSceneTransition(scene.nextSceneId)
      return
    }

    // Otherwise do nothing (end of content)
  }

  const handleSceneTransition = (nextSceneId: string) => {
    setCurrentSceneId(nextSceneId)
    setCurrentMessageIndex(0)
  }

  const handleChoice = (nextSceneId: string) => {
    handleSceneTransition(nextSceneId)
  }

  const handleScreenClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    // UI 部分（コントロールバーや選択肢、メッセージボックス等）でのクリックは無視して
    // 二重進行や誤操作を防ぐ
    if (target.closest('.control-bar, .choice-panel, .choice-button, .message-box, .message-text, button, a, input, select, textarea')) {
      return
    }
    handleNextMessage()
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
  const currentMessage = scene.messages[currentMessageIndex] ?? null

  return (
    <div className="game-engine" onClick={handleScreenClick}>
      {/* 背景 */}
      <div className="scene-background" style={{
        backgroundImage: scene.background ? `url(${scene.background})` : 'none',
      }} />

      {/* キャラクター立ち絵 */}
      <div className="characters-layer" style={{ paddingBottom: messageBoxHeight }}>
        {scene.characters.map((char, idx) => (
          <CharacterRenderer
            key={idx}
            characterState={char}
            characterSprite={sceneData.characters[char.name]}
            bottomOffset={messageBoxHeight + 24}
          />
        ))}
      </div>

      {/* メッセージボックス */}
      {currentMessage && (
        <MessageBox
          message={currentMessage}
          onAdvance={handleNextMessage}
          onHeightChange={setMessageBoxHeight}
        />
      )}

      {/* 選択肢パネル */}
      {isMessageComplete && scene.choices && (
        <ChoicePanel
          choices={scene.choices.choices}
          onChoice={handleChoice}
          offsetBottom={messageBoxHeight + 20}
        />
      )}
    </div>
  )
}
