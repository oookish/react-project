import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib29va2lzaCIsImEiOiJjbDdibXN2eTgxNHkwM3duZ3h0ZjhxYzNpIn0.IXpUis9cqtF-i2E2NtHFFw";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
      projection: "globe",
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={this.mapContainer}></div>
      </div>
    );
  }
}
