import { useEffect, useState } from 'react'
import { Message } from '@/types'
import './MessageBox.css'

interface MessageBoxProps {
  message: Message
  isComplete: boolean
  onAdvance: () => void
  isSkipping: boolean
}

export default function MessageBox({
  message,
  isComplete,
  onAdvance,
  isSkipping,
}: MessageBoxProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (isSkipping) {
      // スキップ時は全文表示
      setDisplayedText(message.text)
      return
    }

    // Typewriter effect
    let currentIndex = 0
    const speedMs = message.speed === 'slow' ? 100 : message.speed === 'fast' ? 30 : 50

    const interval = setInterval(() => {
      if (currentIndex <= message.text.length) {
        setDisplayedText(message.text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, speedMs)

    return () => clearInterval(interval)
  }, [message, isSkipping])

  const handleClick = () => {
    if (!isComplete) {
      // まだ表示途中なら全文表示
      setDisplayedText(message.text)
    } else {
      // 表示完了なら次に進む
      onAdvance()
    }
  }

  return (
    <div className="message-box-container">
      <div className="message-box">
        <div className="message-speaker">{message.characterName}</div>
        <div className="message-text" onClick={handleClick}>
          {displayedText}
          {!isComplete && <span className="message-cursor">▌</span>}
        </div>
        {isComplete && <div className="message-indicator">▼</div>}
      </div>
    </div>
  )
}
