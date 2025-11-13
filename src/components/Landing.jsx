import { useMemo } from 'react'
import { motion } from 'framer-motion'

const featured = [
  { city: 'Kyoto', country: 'Japan', image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1974&auto=format&fit=crop' , color: '#1c2a2e'},
  { city: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1974&auto=format&fit=crop' , color: '#1e2432'},
  { city: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' , color: '#0c1b2a'},
  { city: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop', color: '#14221f' },
  { city: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?q=80&w=1974&auto=format&fit=crop', color: '#0f172a' },
  { city: 'Reykjavík', country: 'Iceland', image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1974&auto=format&fit=crop', color: '#0a1a2b' },
  { city: 'Cappadocia', country: 'Turkey', image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', color: '#2a1b12' },
  { city: 'Marrakesh', country: 'Morocco', image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', color: '#2b1f1a' },
  { city: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', color: '#1f2329' },
  { city: 'Seoul', country: 'South Korea', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1974&auto=format&fit=crop', color: '#0f172a' },
  { city: 'Queenstown', country: 'New Zealand', image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', color: '#0b1a20' },
  { city: 'Lisbon', country: 'Portugal', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop', color: '#201a1b' },
]

export default function Landing({ onPick }) {
  const gridCols = useMemo(() => (featured.length >= 12 ? 'grid-cols-4' : 'grid-cols-3'), [])
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="max-w-6xl w-full px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">Welcome to AI Trip Planner</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Let our agents craft a day-by-day itinerary with flights, stays, and experiences that match your vibe.</p>
          <div className="mt-8">
            <div className="relative max-w-2xl mx-auto">
              <input placeholder="Where do you want to go?" className="w-full h-14 rounded-full pl-5 pr-14 border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none text-gray-800" />
              <button className="absolute right-1.5 top-1.5 h-11 px-5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors">Search</button>
            </div>
          </div>
        </div>
        <div className={`grid ${gridCols} gap-4 md:gap-5`}>
          {featured.map((d, i) => (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              key={d.city}
              onClick={() => onPick(d)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-sm"
            >
              <img src={d.image} alt={`${d.city}, ${d.country}`} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <p className="text-white text-lg font-semibold drop-shadow">{d.city}</p>
                  <p className="text-white/80 text-xs">{d.country}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
