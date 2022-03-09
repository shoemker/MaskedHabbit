import React from 'react'
import { Icon } from '@iconify/react'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="mdi:map-marker" vFlip = "true" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default LocationPin;