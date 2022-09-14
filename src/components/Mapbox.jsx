import { React, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import config from "./Token";
import "../css/Map.css";

mapboxgl.accessToken = config.accessToken;

export const Mapbox = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [55.160033, 61.391300],
      zoom: 10,
      projection: "globe"
    });
    return () => map.remove();
  }, []);

  return (
    <div
      data-testid="map"
      className="map-container"
      ref={mapContainerRef}
    ></div>
  );
};
