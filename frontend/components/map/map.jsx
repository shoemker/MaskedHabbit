import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './locationPin'

// excellent instructions from 
// https://blog.logrocket.com/integrating-google-maps-react/

const Map = ({ location, zoomLevel }) => {
  
  return (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: window.googleAPIKey}}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin

          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  )
  }

export default Map;