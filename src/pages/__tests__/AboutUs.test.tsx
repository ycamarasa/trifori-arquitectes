import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutUs from "../AboutUs";

describe("AboutUs page", () => {
  it("renders without crashing and shows main headings", () => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );

    expect(screen.getByText(/about__title_1/i)).toBeInTheDocument();
    expect(screen.getByText(/about__title_2/i)).toBeInTheDocument();
    expect(screen.getByText(/about_service2_title/i)).toBeInTheDocument();
  });
});
