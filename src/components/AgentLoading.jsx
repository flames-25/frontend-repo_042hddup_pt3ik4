import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const steps = [
  'Research Agent finding flights',
  'Hotel Agent comparing stays',
  'Optimizer Agent scoring results',
  'AI Writer generating descriptions'
]

export default function AgentLoading({ onDone }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => {
        if (i >= steps.length - 1) {
          clearInterval(interval)
          setTimeout(() => onDone && onDone(), 800)
          return i
        }
        return i + 1
      })
    }, 1200)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div className="h-full w-full relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute -inset-1"
          animate={{ background: [
            'radial-gradient(1200px 600px at 20% 10%, rgba(14,165,233,0.25), transparent), radial-gradient(800px 400px at 80% 90%, rgba(16,185,129,0.25), transparent)',
            'radial-gradient(1200px 600px at 80% 10%, rgba(16,185,129,0.25), transparent), radial-gradient(800px 400px at 20% 90%, rgba(14,165,233,0.25), transparent)'
          ]}}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
      </div>
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-2xl p-8 shadow-xl max-w-md w-full mx-6">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="h-8 w-8 rounded-full border-2 border-blue-500 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />
            <p className="text-gray-900 font-medium">Assembling your trip</p>
          </div>
          <div className="space-y-2">
            {steps.map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, y: 6 }} animate={{ opacity: i <= index ? 1 : 0.3, y: 0 }} className="text-sm text-gray-700">
                {s}
              </motion.div>
            ))}
          </div>
          <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div className="h-full bg-blue-600" initial={{ width: '0%' }} animate={{ width: `${((index+1)/steps.length)*100}%` }} transition={{ duration: 0.6 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
