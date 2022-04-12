import { useMap } from 'react-leaflet'

export const MapViewContainer = ({ center, zoom }) => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}
