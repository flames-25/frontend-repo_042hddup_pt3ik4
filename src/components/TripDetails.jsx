import { useState } from 'react'

export default function TripDetails({ onNext, destination }) {
  const [budget, setBudget] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [travelers, setTravelers] = useState(2)

  const canNext = budget && start && end && travelers > 0

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full max-w-lg px-6">
        <div className="bg-white/90 backdrop-blur-sm border border-black/5 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Plan your trip to {destination?.city}</h2>
            <p className="text-gray-600 mt-1">Tell us the basics. We’ll do the rest.</p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <label className="block">
              <span className="text-sm text-gray-700">Budget (₹)</span>
              <input value={budget} onChange={(e)=>setBudget(e.target.value)} type="number" min="0" placeholder="60000" className="mt-2 w-full h-12 rounded-xl border border-gray-200 px-4 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none" />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-gray-700">Start Date</span>
                <input value={start} onChange={(e)=>setStart(e.target.value)} type="date" className="mt-2 w-full h-12 rounded-xl border border-gray-200 px-4 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none" />
              </label>
              <label className="block">
                <span className="text-sm text-gray-700">End Date</span>
                <input value={end} onChange={(e)=>setEnd(e.target.value)} type="date" className="mt-2 w-full h-12 rounded-xl border border-gray-200 px-4 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none" />
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-sm text-gray-700">Number of Travelers</span>
                <div className="mt-2 inline-flex items-center gap-3">
                  <button onClick={()=>setTravelers(Math.max(1, travelers-1))} className="h-10 w-10 rounded-full border border-gray-200 grid place-items-center text-xl">-</button>
                  <span className="w-10 text-center font-medium">{travelers}</span>
                  <button onClick={()=>setTravelers(travelers+1)} className="h-10 w-10 rounded-full border border-gray-200 grid place-items-center text-xl">+</button>
                </div>
              </div>
            </div>
            <button disabled={!canNext} onClick={()=>onNext({budget, start, end, travelers})} className={`h-12 rounded-xl font-medium text-white transition ${canNext? 'bg-gray-900 hover:bg-black' : 'bg-gray-300 cursor-not-allowed'}`}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
