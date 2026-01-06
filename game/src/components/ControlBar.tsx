import './ControlBar.css'

interface ControlBarProps {
  isAutoPlay: boolean
  isSkipping: boolean
  onToggleAuto: () => void
  onToggleSkip: () => void
}

export default function ControlBar({
  isAutoPlay,
  isSkipping,
  onToggleAuto,
  onToggleSkip,
}: ControlBarProps) {
  return (
    <div className="control-bar">
      <button
        className={`control-button ${isAutoPlay ? 'active' : ''}`}
        onClick={onToggleAuto}
        title="Auto Play (A)"
      >
        ⏱
      </button>
      <button
        className={`control-button ${isSkipping ? 'active' : ''}`}
        onClick={onToggleSkip}
        title="Skip (S)"
      >
        ⏭
      </button>
    </div>
  )
}
