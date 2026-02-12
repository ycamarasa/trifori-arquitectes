import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Header from "../Header";

const changeLanguageMock = vi.fn();

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: "es",
      changeLanguage: changeLanguageMock,
    },
  }),
}));

vi.mock("react-router-dom", () => ({
  Link: ({ children, ...props }: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) => (
    <a {...props}>{children}</a>
  ),
  useLocation: () => ({ pathname: "/" }),
}));

describe("Header", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    changeLanguageMock.mockClear();
  });

  it("renders logo and navigation links", () => {
    render(<Header />);

    // Logo
    const logoImg = screen.getByAltText("Logo Trifori arquitectes");
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src", "/assets/logo-black.png");

    // Links
    expect(screen.getByText("header_about_us")).toBeInTheDocument();
    expect(screen.getByText("header_projects")).toBeInTheDocument();
    expect(screen.getByText("header_services")).toBeInTheDocument();
    expect(screen.getByText("header_contact")).toBeInTheDocument();
  });

  it("calls window.scrollTo on mount", () => {
    render(<Header />);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("toggles burger menu open and closed", () => {
    render(<Header />);
    const burger = screen.getByRole("button", { name: "Abrir menú" });

    // abrir
    fireEvent.click(burger);
    expect(burger).toHaveAttribute("aria-expanded", "true");

    // cerrar
    fireEvent.click(burger);
    expect(burger).toHaveAttribute("aria-expanded", "false");
  });

  it("closes menu when clicking any nav link", () => {
    render(<Header />);
    const burger = screen.getByRole("button", { name: "Abrir menú" });
    fireEvent.click(burger);

    const links = [
      screen.getByText("header_about_us"),
      screen.getByText("header_projects"),
      screen.getByText("header_services"),
      screen.getByText("header_contact"),
    ];

    links.forEach(link => {
      fireEvent.click(link);
      expect(burger).toHaveAttribute("aria-expanded", "false");
      fireEvent.click(burger); // reabrimos para el siguiente link
    });
  });

  it("changes language on mobile buttons and closes menu", () => {
    render(<Header />);
    const burger = screen.getByRole("button", { name: "Abrir menú" });
    fireEvent.click(burger);

    const caButton = screen.getAllByText("CA")[0];
    fireEvent.click(caButton);
    expect(changeLanguageMock).toHaveBeenCalledWith("ca");
    expect(burger).toHaveAttribute("aria-expanded", "false");

    const esButton = screen.getAllByText("ES")[0]; 
    fireEvent.click(esButton);
    expect(changeLanguageMock).toHaveBeenCalledWith("es");

    const enButton = screen.getAllByText("EN")[0]; 
    fireEvent.click(enButton);
    expect(changeLanguageMock).toHaveBeenCalledWith("en");
  });

  it("changes language on desktop buttons", () => {
    render(<Header />);
    const caButton = screen.getAllByText("CA")[1]; 
    fireEvent.click(caButton);
    expect(changeLanguageMock).toHaveBeenCalledWith("ca");

    const esButton = screen.getAllByText("ES")[1]; 
    fireEvent.click(esButton);
    expect(changeLanguageMock).toHaveBeenCalledWith("es");

    const enButton = screen.getAllByText("EN")[1]; 
    fireEvent.click(enButton);
    expect(changeLanguageMock).toHaveBeenCalledWith("en");
  });

  it("applies active class correctly for current language", () => {
    render(<Header />);
    const esButtons = screen.getAllByText("ES");
    esButtons.forEach(btn => {
      expect(btn).toHaveClass("active");
    });

    const caButtons = screen.getAllByText("CA");
    caButtons.forEach(btn => {
      expect(btn).not.toHaveClass("active");
    });
  });
});
