import { ArrowLeft } from 'lucide-react'

function IconButton({ label, onClick }) {
  return (
    <button className="icon-button" type="button" aria-label={label} onClick={onClick}>
      <ArrowLeft size={18} aria-hidden="true" />
      <span>{label}</span>
    </button>
  )
}

export default IconButton
