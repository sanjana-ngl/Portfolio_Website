import LocationHotspot from './LocationHotspot'
import MapBackground from './MapBackground'

function KingdomScene({ locations, hoveredLocation, selectedLocation, onHover, onLeave, onSelect }) {
  return (
    <section
      className="kingdom-map"
      aria-label="Interactive developer kingdom"
    >
      <div className="map-parallax map-parallax-background">
        <MapBackground />
      </div>
      {locations.map((location) => {
        const isActive = hoveredLocation === location.id || selectedLocation === location.id

        return (
          <LocationHotspot
            key={location.id}
            location={location}
            isActive={isActive}
            onHover={onHover}
            onLeave={onLeave}
            onSelect={onSelect}
          />
        )
      })}
      <p className="map-instruction">Hover over the blue region to view</p>
    </section>
  )
}

export default KingdomScene
