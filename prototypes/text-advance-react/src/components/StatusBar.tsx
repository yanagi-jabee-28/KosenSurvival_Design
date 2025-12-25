import React from 'react'
import type { BaseStats } from '../types/stats'

type Props = { stats: BaseStats }

export default function StatusBar({ stats }: Props) {
  return (
    <div className="status-bar">
      <div className="status-bar-item">
        体力: <span style={{ fontWeight: 600, color: '#1f6feb' }}>{stats.vitality}</span>
      </div>
      <div className="status-bar-item">
        メンタル: <span style={{ fontWeight: 600, color: '#8b5cf6' }}>{stats.sanity}</span>
      </div>
      <div className="status-bar-item">
        ¥<span style={{ fontWeight: 600 }}>{(stats.money / 1000).toFixed(0)}k</span>
      </div>
    </div>
  )
}
