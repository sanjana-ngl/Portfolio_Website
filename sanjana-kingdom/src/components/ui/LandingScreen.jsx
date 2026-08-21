import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

function LandingScreen({ onEnter }) {
  return (
    <motion.section
      className="landing-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      aria-labelledby="landing-title"
    >
      <div className="landing-rays" aria-hidden="true" />
      <div className="landing-particles" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
      </div>
      <motion.div
        className="landing-content"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.12, duration: 0.65, ease: 'easeOut' }}
      >
        <p className="eyebrow"><Sparkles size={13} aria-hidden="true" /> Developer portfolio</p>
        <h1 id="landing-title">Sanjana&apos;s Portfolio</h1>
        <p className="landing-subtitle">Computer Science Engineering Student</p>
        <p className="landing-description">Building, learning, and exploring through code.</p>
        <motion.button
          className="enter-button"
          type="button"
          onClick={onEnter}
          whileHover={{ scale: 1.04, boxShadow: '0 0 34px rgba(140, 227, 209, 0.3)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          Enter Kingdom <ArrowRight size={18} aria-hidden="true" />
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default LandingScreen
