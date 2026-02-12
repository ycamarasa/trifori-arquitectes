import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function Map() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [0.6286301974441679, 41.61302387074417],
      zoom: 13,
    });

    new mapboxgl.Marker({ color: "var(--color-text)" })
      .setLngLat([0.6286301974441679, 41.61302387074417])
      .addTo(mapRef.current);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <div
      data-testid="map-container"
      style={{ width: "100%", height: "100%" }}
      ref={mapContainerRef}
    ></div>
  );
}
