import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../Contact";

describe("Contact page", () => {
  it("renders without crashing and shows main headings", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    expect(screen.getByText(/contact_title/i)).toBeInTheDocument();
    expect(screen.getByText(/contact_subtitle/i)).toBeInTheDocument();
    expect(screen.getByText(/Trifori Arquitectes/i)).toBeInTheDocument();
    expect(screen.getByText(/laia@trifori\.com/i)).toBeInTheDocument();
  });
});
