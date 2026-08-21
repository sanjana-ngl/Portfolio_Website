import HoverLabel from './HoverLabel'

function LocationHotspot({ location, isActive, onHover, onLeave, onSelect }) {
  const { hotspot } = location

  return (
    <button
      className={`location-hotspot location-${location.id}${isActive ? ' is-active' : ''}`}
      style={{
        '--left': `${hotspot.left}%`,
        '--top': `${hotspot.top}%`,
        '--width': `${hotspot.width}%`,
        '--height': `${hotspot.height}%`,
      }}
      type="button"
      aria-label={`Enter ${location.title}`}
      onPointerEnter={() => onHover(location.id)}
      onPointerLeave={onLeave}
      onMouseOver={() => onHover(location.id)}
      onMouseLeave={onLeave}
      onFocus={() => onHover(location.id)}
      onBlur={onLeave}
      onPointerDown={(event) => {
        event.preventDefault()
        onSelect(location)
      }}
      onClick={(event) => {
        if (event.detail === 0) onSelect(location)
      }}
    >
      <span className="hotspot-highlight" aria-hidden="true" />
      <HoverLabel location={location} isVisible={isActive} />
    </button>
  )
}

export default LocationHotspot
