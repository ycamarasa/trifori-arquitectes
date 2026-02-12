import "@testing-library/jest-dom";
import { vi } from "vitest";

window.scrollTo = vi.fn();

// Mock i18n para todos los tests
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, opts?: { returnObjects?: boolean }) => {
      // Mock especial para Projects
      if (key === "projects.items" && opts && opts.returnObjects) {
        return [
          {
            title: "Proyecto 1",
            location: "Barcelona",
            description: "desc",
            images: ["img1.jpg"],
          },
          {
            title: "Proyecto 2",
            location: "Madrid",
            description: "desc",
            images: ["img2.jpg", "img3.jpg"],
          },
        ];
      }
      return key;
    },
    i18n: { changeLanguage: () => Promise.resolve() },
  }),
}));

// Mock react-router-dom para Router, useLocation, useSearchParams, etc.
import * as routerDom from "react-router-dom";
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof routerDom>("react-router-dom");
  return {
    ...actual,
    useLocation: () => ({ pathname: "/" }),
    useSearchParams: () => [new URLSearchParams(), vi.fn()],
    useNavigate: () => vi.fn(),
  };
});

// Mock de mapbox-gl para evitar errores de WebGL en tests
vi.mock("mapbox-gl", () => {
  class MapMock {
    remove = vi.fn();
    on = vi.fn();
    off = vi.fn();
    addControl = vi.fn();
    fitBounds = vi.fn();
    resize = vi.fn();
  }

  class MarkerMock {
    setLngLat = vi.fn().mockReturnThis();
    addTo = vi.fn().mockReturnThis();
  }

  return {
    __esModule: true,
    default: {
      Map: MapMock,
      Marker: MarkerMock,
    },
    Map: MapMock,
    Marker: MarkerMock,
  };
});
