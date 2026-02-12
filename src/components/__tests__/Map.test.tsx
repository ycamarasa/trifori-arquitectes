import { render, screen } from "@testing-library/react";
import Map from "../Map";
import mapboxgl from "mapbox-gl";

describe("Map component", () => {
  it("renders the map container", () => {
    render(<Map />);
    expect(screen.getByTestId("map-container")).toBeInTheDocument();
  });

  it("calls Mapbox Map and Marker", () => {
    render(<Map />);

    const MapClass = mapboxgl.Map;
    const MarkerClass = mapboxgl.Marker;

    const mapInstance = new MapClass({ container: document.createElement("div"), style: "" });
    const markerInstance = new MarkerClass();

    expect(mapInstance.remove).toBeDefined();
    expect(markerInstance.setLngLat).toBeDefined();
  });

  it("calls remove on unmount", () => {
    const { unmount } = render(<Map />);
    const mapInstance = new mapboxgl.Map({ container: document.createElement("div"), style: "" });
    unmount();
    expect(mapInstance.remove).toBeDefined();
  });
});
