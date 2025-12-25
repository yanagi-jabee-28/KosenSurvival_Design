import React from 'react'
import type { BaseStats } from '../types/stats'

type Props = {
  stats: BaseStats
}

function Bar({ value, max = 100, color = '#1f6feb' }: { value: number; max?: number; color?: string }) {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)))
  return (
    <div className="bar">
      <div className="bar-fill" style={{ width: pct + '%', background: color }} />
      <div className="bar-text">{value}</div>
    </div>
  )
}

export default function StatusPanel({ stats }: Props) {
  return (
    <section className="status">
      <h2>ステータス</h2>
      <div className="grid">
        <div className="row"><label>体力 (Vitality)</label><Bar value={stats.vitality} /></div>
        <div className="row"><label>メンタル (Sanity)</label><Bar value={stats.sanity} color="#8b5cf6" /></div>
        <div className="row money"><label>資金 (Money)</label><span className="money">¥{stats.money.toLocaleString()}</span></div>
        <div className="row"><label>地頭 (Logic)</label><Bar value={stats.logic} max={99} color="#059669" /></div>
        <div className="row"><label>人望 (Charisma)</label><Bar value={stats.charisma} max={50} color="#f59e0b" /></div>
        <div className="row"><label>業 (Karma)</label><Bar value={stats.karma} color="#ef4444" /></div>
      </div>
    </section>
  )
}
