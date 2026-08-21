import {
  BadgeCheck,
  Castle,
  Code2,
  FolderCode,
  GraduationCap,
  Hammer,
  Mountain,
  Send,
  TreePine,
  Trophy,
  Users,
} from 'lucide-react'
import { motion } from 'motion/react'

const icons = {
  'badge-check': BadgeCheck,
  castle: Castle,
  code: Code2,
  'folder-code': FolderCode,
  'graduation-cap': GraduationCap,
  hammer: Hammer,
  mountain: Mountain,
  send: Send,
  trees: TreePine,
  trophy: Trophy,
  users: Users,
}

function HoverLabel({ location, isVisible }) {
  const Icon = icons[location.icon] || Code2

  return (
    <motion.span
      className="map-hover-label"
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Icon size={14} aria-hidden="true" />
      <span>
        <strong>{location.title}</strong>
        <small>{location.category}</small>
      </span>
    </motion.span>
  )
}

export default HoverLabel
