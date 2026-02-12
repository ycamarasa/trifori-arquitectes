import { render, screen, fireEvent } from "@testing-library/react";
import ProjectCarousel from "../ProjectCarousel";

describe("ProjectCarousel", () => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

  it("renders first image initially", () => {
    render(<ProjectCarousel images={images} title="Proyecto" />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "img1.jpg");
    expect(img).toHaveAttribute("alt", "Proyecto - img 1");
  });

  it("goes to next image on next button click", () => {
    render(<ProjectCarousel images={images} title="Proyecto" />);

    const buttons = screen.getAllByLabelText("Imagen del proyecto");
    const nextBtn = buttons[1];

    fireEvent.click(nextBtn);

    expect(screen.getByRole("img")).toHaveAttribute("src", "img2.jpg");
  });

  it("goes to previous image on prev button click", () => {
    render(<ProjectCarousel images={images} title="Proyecto" />);

    const buttons = screen.getAllByLabelText("Imagen del proyecto");
    const prevBtn = buttons[0];

    fireEvent.click(prevBtn);

    // wrap around
    expect(screen.getByRole("img")).toHaveAttribute("src", "img3.jpg");
  });

  it("changes image when clicking dots", () => {
    render(<ProjectCarousel images={images} title="Proyecto" />);

    const dot = screen.getByLabelText("Imagen 3");
    fireEvent.click(dot);

    expect(screen.getByRole("img")).toHaveAttribute("src", "img3.jpg");
  });

  it("handles swipe left (next)", () => {
    render(<ProjectCarousel images={images} title="Proyecto" />);

    const carousel = screen.getByRole("img").parentElement!;

    fireEvent.touchStart(carousel, {
      targetTouches: [{ clientX: 200 }],
    });

    fireEvent.touchMove(carousel, {
      targetTouches: [{ clientX: 100 }],
    });

    fireEvent.touchEnd(carousel);

    expect(screen.getByRole("img")).toHaveAttribute("src", "img2.jpg");
  });

  it("handles swipe right (prev)", () => {
    render(<ProjectCarousel images={images} title="Proyecto" />);

    const carousel = screen.getByRole("img").parentElement!;

    fireEvent.touchStart(carousel, {
      targetTouches: [{ clientX: 100 }],
    });

    fireEvent.touchMove(carousel, {
      targetTouches: [{ clientX: 200 }],
    });

    fireEvent.touchEnd(carousel);

    expect(screen.getByRole("img")).toHaveAttribute("src", "img3.jpg");
  });

  it("does not change image on short swipe", () => {
    render(<ProjectCarousel images={images} title="Proyecto" />);

    const carousel = screen.getByRole("img").parentElement!;

    fireEvent.touchStart(carousel, {
      targetTouches: [{ clientX: 200 }],
    });

    fireEvent.touchMove(carousel, {
      targetTouches: [{ clientX: 170 }],
    });

    fireEvent.touchEnd(carousel);

    expect(screen.getByRole("img")).toHaveAttribute("src", "img1.jpg");
  });

  it("does not render dots if only one image", () => {
    render(<ProjectCarousel images={["solo.jpg"]} title="Solo" />);

    expect(screen.queryByRole("button", { name: "Imagen 1" })).toBeNull();
  });
});
