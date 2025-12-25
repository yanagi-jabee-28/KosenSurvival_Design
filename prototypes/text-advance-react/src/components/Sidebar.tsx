import React from 'react'
import type { BaseStats } from '../types/stats'

type Props = { stats: BaseStats }

export default function Sidebar({ stats }: Props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3>ステータス</h3>
        <div className="sidebar-stat">
          <label>体力</label>
          <div className="mini-bar" style={{ background: `linear-gradient(90deg, #1f6feb 0%, #1f6feb ${stats.vitality}%, #f1f5f9 ${stats.vitality}%, #f1f5f9 100%)` }} />
          <span>{stats.vitality}</span>
        </div>
        <div className="sidebar-stat">
          <label>メンタル</label>
          <div className="mini-bar" style={{ background: `linear-gradient(90deg, #8b5cf6 0%, #8b5cf6 ${stats.sanity}%, #f1f5f9 ${stats.sanity}%, #f1f5f9 100%)` }} />
          <span>{stats.sanity}</span>
        </div>
        <div className="sidebar-stat money">
          <label>資金</label>
          <span>¥{(stats.money / 1000).toFixed(0)}k</span>
        </div>
        <div className="sidebar-stat">
          <label>地頭</label>
          <span>{stats.logic}</span>
        </div>
        <div className="sidebar-stat">
          <label>人望</label>
          <span>{stats.charisma}</span>
        </div>
        <div className="divider" />
        <button className="menu-btn">メニュー</button>
      </div>
    </aside>
  )
}
