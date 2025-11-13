import { useMemo, useState } from 'react'

const ALL = [
  { key: 'culture', label: 'Culture', icon: '🏛️' },
  { key: 'food', label: 'Food', icon: '🍜' },
  { key: 'nature', label: 'Nature', icon: '🌿' },
  { key: 'beach', label: 'Beaches', icon: '🏖️' },
  { key: 'adventure', label: 'Adventure', icon: '🧗' },
  { key: 'nightlife', label: 'Nightlife', icon: '🌃' },
  { key: 'shopping', label: 'Shopping', icon: '🛍️' },
  { key: 'history', label: 'History', icon: '📜' },
  { key: 'art', label: 'Art', icon: '🖼️' },
  { key: 'wellness', label: 'Wellness', icon: '💆' },
  { key: 'photography', label: 'Photography', icon: '📸' },
  { key: 'hiking', label: 'Hiking', icon: '🥾' },
]

export default function Interests({ onFind }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState([])

  const filtered = useMemo(() => ALL.filter(i => i.label.toLowerCase().includes(query.toLowerCase())), [query])

  const toggle = (k) => {
    setSelected(prev => prev.includes(k) ? prev.filter(x=>x!==k) : [...prev, k])
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="max-w-3xl w-full px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-900">What are you interested in?</h2>
        </div>
        <div className="mb-6">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search interests" className="w-full h-12 rounded-xl border border-gray-200 px-4 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filtered.map(i => {
            const active = selected.includes(i.key)
            return (
              <button key={i.key} onClick={()=>toggle(i.key)} className={`h-16 rounded-xl border transition shadow-sm flex items-center justify-center gap-2 text-sm font-medium ${active ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                <span className="text-lg">{i.icon}</span>
                {i.label}
              </button>
            )
          })}
        </div>
        <div className="mt-8 text-center">
          <button onClick={()=>onFind(selected)} className="h-12 px-8 rounded-xl bg-gray-900 hover:bg-black text-white font-medium">Find My Trip</button>
        </div>
      </div>
    </div>
  )
}
