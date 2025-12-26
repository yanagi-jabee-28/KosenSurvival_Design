import React from 'react'
import type { Stats } from '../types/stats'

type Props = { stats: Stats }

export default function StatusBar({ stats }: Props) {
  return (
    <div className="status-bar">
      <div className="status-bar-item">K:<span style={{ fontWeight: 600 }}>{stats.knowledge}</span></div>
      <div className="status-bar-item">P:<span style={{ fontWeight: 600 }}>{stats.proficiency}</span></div>
      <div className="status-bar-item">San:<span style={{ fontWeight: 600 }}>{stats.sanity}</span></div>
      <div className="status-bar-item">Cr:<span style={{ fontWeight: 600 }}>{stats.credits}</span></div>
    </div>
  )
}
