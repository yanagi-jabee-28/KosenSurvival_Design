import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react'
import { Message, Choice } from '@/types'
import ChoicePanel from './ChoicePanel'
import './MessageBox.css' 

interface MessageBoxProps {
  message: Message
  onAdvance: () => void
  onHeightChange?: (height: number) => void
  choices?: Choice[]
  onChoice?: (nextSceneId: string) => void
  showSpeaker?: boolean
}

export default function MessageBox({
  message,
  onAdvance,
  onHeightChange,
  choices,
  onChoice,
  showSpeaker = true,
}: MessageBoxProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current

    // Initial measurement
    onHeightChange?.(Math.ceil(el.getBoundingClientRect().height))

    // Observe size changes
    const ro = new ResizeObserver(() => {
      onHeightChange?.(Math.ceil(el.getBoundingClientRect().height))
    })
    ro.observe(el)

    return () => ro.disconnect()
  }, [message, onHeightChange, choices])

  useEffect(() => {
    // Reset states when message changes
    setDisplayedText('')
    setIsFullyDisplayed(false)

    // Typewriter effect
    let currentIndex = 0
    const speedMs = message.speed === 'slow' ? 100 : message.speed === 'fast' ? 30 : 50

    const interval = setInterval(() => {
      if (currentIndex <= message.text.length) {
        setDisplayedText(message.text.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsFullyDisplayed(true)
        clearInterval(interval)
      }
    }, speedMs)

    return () => clearInterval(interval)
  }, [message])

  const lastInteractionRef = useRef<number>(0)

  const handleAdvanceInteraction = (doStopPropagation = true) => {
    // duplicate suppression
    const now = Date.now()
    if (now - lastInteractionRef.current < 100) return
    lastInteractionRef.current = now

    if (!isFullyDisplayed) {
      // Show full text
      setDisplayedText(message.text)
      setIsFullyDisplayed(true)
    } else {
      // Advance
      onAdvance()
    }
  }

  const handleClick = (e?: ReactMouseEvent) => {
    e?.stopPropagation()
    handleAdvanceInteraction()
  }

  const handleTouchStart = (e: ReactTouchEvent) => {
    // Prevent the emulated click and double-trigger
    e.preventDefault()
    e.stopPropagation()
    const now = Date.now()
    if (now - lastInteractionRef.current < 500) return
    lastInteractionRef.current = now
    handleAdvanceInteraction()
  }

  return (
    <div className="message-box-container" ref={containerRef} onClick={handleClick} onTouchStart={handleTouchStart}>
      <div className="message-box">
        {showSpeaker && <div className="message-speaker">{message.characterName}</div>}
        <div className="message-text" onClick={handleClick}>
          {displayedText}
          {!isFullyDisplayed && <span className="message-cursor">▌</span>}
        </div>
        {isFullyDisplayed && choices && choices.length > 0 ? (
          <ChoicePanel choices={choices} onChoice={(id) => onChoice?.(id)} inline />
        ) : (
          isFullyDisplayed && <div className="message-indicator">▼</div>
        )}
      </div>
    </div>
  )
}
