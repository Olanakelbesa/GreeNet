'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the container style for the map
const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '688px',
};

// Define the props interface for GoogleMapComponent
interface GoogleMapComponentProps {
  center: {
    lat: number;
    lng: number;
  };
  onMarkerPositionChange?: (position: { lat: number; lng: number }) => void;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ center, onMarkerPositionChange }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string} >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        
      >
        <Marker 
          position={center}
          draggable={!!onMarkerPositionChange}
          onDragEnd={(e) => {
            if (onMarkerPositionChange && e.latLng) {
              const newPosition = {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              };
              onMarkerPositionChange(newPosition);
            }
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;