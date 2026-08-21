import { useState } from 'react'

export function useKingdomInteraction() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [hoveredLocation, setHoveredLocation] = useState(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isEntering, setIsEntering] = useState(false)
  const [sceneMode, setSceneMode] = useState('overview')

  function enterLocation(location) {
    setIsEntering(true)
    setSelectedLocation(location)
    setSceneMode('detail')
    setIsPanelOpen(true)
    setIsEntering(false)
  }

  function returnToKingdom() {
    setIsPanelOpen(false)
    setSceneMode('overview')
    setSelectedLocation(null)
    setIsEntering(false)
  }

  return {
    selectedLocation,
    hoveredLocation,
    isPanelOpen,
    isEntering,
    sceneMode,
    setHoveredLocation,
    enterLocation,
    returnToKingdom,
  }
}
