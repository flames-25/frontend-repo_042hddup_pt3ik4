import { motion } from 'framer-motion'

export default function Itinerary({ destination, details, interests, onRestart }) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="max-w-5xl w-full px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Your {destination?.city} itinerary</h2>
            <p className="text-gray-600 text-sm">{details?.start} → {details?.end} • {details?.travelers} travelers • Budget ₹{details?.budget}</p>
          </div>
          <button onClick={onRestart} className="h-10 px-4 rounded-lg border border-gray-300 hover:bg-gray-50">Start over</button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[1,2,3,4,5].map((d,i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i*0.05 }} className="rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-32 bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url(${destination?.image})` }} />
              <div className="p-4">
                <p className="text-sm font-medium text-gray-900">Day {i+1}</p>
                <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>Morning: Explore a local highlight</li>
                  <li>Afternoon: Activity based on {interests?.slice(0,2).join(', ') || 'your interests'}</li>
                  <li>Evening: Great dinner spot</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
