import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import DetailPanel from './components/panels/DetailPanel'
import KingdomScene from './components/kingdom/KingdomScene'
import LandingScreen from './components/ui/LandingScreen'
import { locations } from './data/locations'
import { useKingdomInteraction } from './hooks/useKingdomInteraction'
import './App.css'

function App() {
  const [hasEnteredKingdom, setHasEnteredKingdom] = useState(false)
  const interaction = useKingdomInteraction()

  return (
    <main className="app-shell">
      <AnimatePresence mode="wait" initial={false}>
        {!hasEnteredKingdom ? (
          <LandingScreen key="landing" onEnter={() => setHasEnteredKingdom(true)} />
        ) : (
          <motion.div
            className={`kingdom-app mode-${interaction.sceneMode}`}
            key="kingdom"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <KingdomScene
              locations={locations}
              hoveredLocation={interaction.hoveredLocation}
              selectedLocation={interaction.selectedLocation?.id}
              onHover={interaction.setHoveredLocation}
              onLeave={() => interaction.setHoveredLocation(null)}
              onSelect={interaction.enterLocation}
            />
            <DetailPanel
              location={interaction.selectedLocation}
              isOpen={interaction.isPanelOpen}
              onReturn={interaction.returnToKingdom}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
