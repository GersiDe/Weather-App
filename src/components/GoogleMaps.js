import React from "react";
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";

class Map extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[this.props.lat, this.props.lon]}
        zoom={15}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <Marker position={[this.props.lat, this.props.lon]}></Marker>
      </LeafletMap>
    );
  }
}

export default Map;
