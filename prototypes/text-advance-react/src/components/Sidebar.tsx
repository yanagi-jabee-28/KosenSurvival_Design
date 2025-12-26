import React from 'react'
import type { Stats } from '../types/stats'

type Props = { stats: Stats }

export default function Sidebar({ stats }: Props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3>ステータス</h3>
        <div className="sidebar-stat">
          <label>Knowledge</label>
          <span>{stats.knowledge}</span>
        </div>
        <div className="sidebar-stat">
          <label>Proficiency</label>
          <span>{stats.proficiency}</span>
        </div>
        <div className="sidebar-stat">
          <label>Sanity</label>
          <span>{stats.sanity}</span>
        </div>
        <div className="sidebar-stat">
          <label>Credits</label>
          <span>{stats.credits}</span>
        </div>
      </div>
    </aside>
  )
}
