import { motion, AnimatePresence } from 'framer-motion'

export default function StepContainer({ stateKey, children, bg }) {
  return (
    <div className="h-screen w-screen overflow-hidden relative" style={{ background: bg }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={stateKey}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
