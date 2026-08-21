import IconButton from '../ui/IconButton'
import PanelContent from './PanelContent'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'

function DetailPanel({ location, isOpen, onReturn }) {
  useEffect(() => {
    if (!isOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') onReturn()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onReturn])

  return (
    <AnimatePresence>
      {location && isOpen ? (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={onReturn}
        >
          <motion.aside
            className="detail-panel"
            aria-labelledby="detail-title"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <IconButton label="Return to kingdom" onClick={onReturn} />
            <p className="eyebrow">{location.category}</p>
            <h2 id="detail-title">{location.title}</h2>
            <PanelContent location={location} />
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default DetailPanel
