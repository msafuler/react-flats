import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ price, priceCurrency }) => (
  <div className="selected-icon">
    <i className="fa-regular fa-comment" />
    <p id="price">{price}e</p>
  </div>
);

export default function Map({ selectedFlat }) {
  const defaultProps = {
    center: {
      lat: 48.8566,
      lng: 2.3522
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD9xyxPCbEj4OZCWN-Wk5ZDYb7GMMgYD5c" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent
          lat={selectedFlat && selectedFlat.lat}
          lng={selectedFlat && selectedFlat.lng}
          price={selectedFlat && selectedFlat.price}
        />
      </GoogleMapReact>
    </div>
  );
}
