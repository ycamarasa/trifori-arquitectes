import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Homepage from "../HomePage";

// Mock i18n específico
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Homepage", () => {
  beforeEach(() => {
    vi.useFakeTimers();

    window.scrollTo = vi.fn();

    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
    });

    Object.defineProperty(window, "innerHeight", {
      value: 800,
      writable: true,
    });

    let rafCalled = false;

    global.requestAnimationFrame = vi.fn((cb: (time: number) => void) => {
      if (!rafCalled) {
        rafCalled = true;
        cb(5000);
      }
      return 1;
    });

    vi.spyOn(window, "addEventListener");
    vi.spyOn(window, "removeEventListener");
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("renders homepage content correctly", () => {
    render(<Homepage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("homepage_title");
    expect(heading).toHaveTextContent("homepage_title_2");
    expect(heading).toHaveTextContent("homepage_title_3");

    expect(screen.getByAltText("homepage_alt_bkg")).toBeInTheDocument();
    expect(screen.getByAltText("homepage_alt_house")).toBeInTheDocument();
  });

  it("scrolls down after timeout", () => {
    render(<Homepage />);

    // Ejecuta el setTimeout
    vi.advanceTimersByTime(1000);

    expect(window.scrollTo).toHaveBeenCalled();
  });

  it("handles double click scroll", () => {
    render(<Homepage />);

    // Simulamos doble click
    window.dispatchEvent(new Event("dblclick"));

    expect(window.scrollTo).toHaveBeenCalled();
  });

  it("cleans up on unmount", () => {
    const { unmount } = render(<Homepage />);
    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith(
      "dblclick",
      expect.any(Function),
    );
  });
});
