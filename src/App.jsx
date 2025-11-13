import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import StepContainer from './components/StepContainer'
import Landing from './components/Landing'
import TripDetails from './components/TripDetails'
import Interests from './components/Interests'
import AgentLoading from './components/AgentLoading'
import Itinerary from './components/Itinerary'

const defaultBg = 'linear-gradient(135deg, #f6f7fb 0%, #eef2f7 100%)'

export default function App() {
  const [state, setState] = useState('landing')
  const [destination, setDestination] = useState(null)
  const [details, setDetails] = useState(null)
  const [interests, setInterests] = useState([])

  const bg = useMemo(() => destination?.color || defaultBg, [destination])

  return (
    <StepContainer stateKey={state} bg={bg}>
      <AnimatePresence mode="wait">
        {state === 'landing' && (
          <motion.div key="landing" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Landing onPick={(d)=>{ setDestination(d); setState('details') }} />
          </motion.div>
        )}
        {state === 'details' && (
          <motion.div key="details" className="h-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}>
            <TripDetails destination={destination} onNext={(vals)=>{ setDetails(vals); setState('interests') }} />
          </motion.div>
        )}
        {state === 'interests' && (
          <motion.div key="interests" className="h-full" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Interests onFind={(list)=>{ setInterests(list); setState('loading') }} />
          </motion.div>
        )}
        {state === 'loading' && (
          <motion.div key="loading" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AgentLoading onDone={()=> setState('itinerary')} />
          </motion.div>
        )}
        {state === 'itinerary' && (
          <motion.div key="itinerary" className="h-full" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <Itinerary destination={destination} details={details} interests={interests} onRestart={()=>{ setDestination(null); setDetails(null); setInterests([]); setState('landing') }} />
          </motion.div>
        )}
      </AnimatePresence>
    </StepContainer>
  )
}
