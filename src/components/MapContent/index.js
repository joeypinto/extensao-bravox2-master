import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { MapContext } from 'contexts/mapContext'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { MapViewContainer } from './mapViewContainer'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import * as Styles from './styles'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
const MAPBOX_USER = process.env.NEXT_PUBLIC_MAPBOX_USER
const MAPBOX_STYLE = process.env.NEXT_PUBLIC_MAPBOX_STYLE

const CustomTitle = () => {
  return MAPBOX_TOKEN ? (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright" class="is_linkMap">OpenStreetMap</a> contributors, CC-BY-SA, Imagery © Mapbox'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USER}/${MAPBOX_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright" class="is_linkMap">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const pinDefault = L.icon({
  iconUrl: '/images/pinblack.png',
  iconSize: [35, 42]
})

const pinDefaultActive = L.icon({
  iconUrl: '/images/pinyellow.png',
  iconSize: [35, 42]
})

const zoomMap = 10

const MapContent = () => {
  const router = useRouter()
  const context = useContext(MapContext)
  const FiltersContext = context.filtersAndTecnicals

  useEffect(() => {
    let { tid } = router.query

    if (tid && tid !== null && tid !== '') {
      FiltersContext.setTecnicalSelect(parseInt(tid))
    }
  }, [])

  const selectLongitudeAndLatitude = () => {
    let positionCurrency = FiltersContext.listAssistentsTecnicals.filter(
      (tecnical) => {
        return tecnical.ID === FiltersContext.assistentsTecnicaslSelected
      }
    )

    if (positionCurrency.length > 0) {
      return [positionCurrency[0].LATITUDE, positionCurrency[0].LONGITUDE]
    } else {
      router.push('/404')
      return [0, 0]
    }
  }

  let position =
    FiltersContext.assistentsTecnicaslSelected !== 0
      ? selectLongitudeAndLatitude()
      : FiltersContext.listAssistentsTecnicals.length > 0
      ? [
          FiltersContext.listAssistentsTecnicals[0].LATITUDE,
          FiltersContext.listAssistentsTecnicals[0].LONGITUDE
        ]
      : [-23.2776399, -47.306864]

  return (
    <Styles.MapContent>
      <MapContainer
        id="mapBravox"
        center={position}
        zoom={zoomMap}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <MapViewContainer center={position} zoom={zoomMap} />
        <CustomTitle />

        {FiltersContext.listAssistentsTecnicalsFiltred.length > 0
          ? FiltersContext.listAssistentsTecnicalsFiltred.map((assistent) => {
              return (
                <Marker
                  key={`#${assistent.ID}`}
                  position={[assistent.LATITUDE, assistent.LONGITUDE]}
                  draggable={false}
                  animate={true}
                  icon={
                    FiltersContext.assistentsTecnicaslSelected !== assistent.ID
                      ? pinDefault
                      : pinDefaultActive
                  }
                  eventHandlers={{
                    click: (e) => {
                      FiltersContext.setTecnicalSelect(assistent.ID)
                    }
                  }}
                ></Marker>
              )
            })
          : FiltersContext.listAssistentsTecnicals.length > 0 &&
            FiltersContext.listAssistentsTecnicals.map((assistent) => {
              return (
                <Marker
                  key={`#${assistent.ID}`}
                  position={[assistent.LATITUDE, assistent.LONGITUDE]}
                  draggable={false}
                  animate={true}
                  icon={
                    FiltersContext.assistentsTecnicaslSelected !== assistent.ID
                      ? pinDefault
                      : pinDefaultActive
                  }
                  eventHandlers={{
                    click: (e) => {
                      FiltersContext.setTecnicalSelect(assistent.ID)
                    }
                  }}
                ></Marker>
              )
            })}
      </MapContainer>
    </Styles.MapContent>
  )
}

export default MapContent
