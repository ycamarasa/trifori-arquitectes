import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import PrivacyPolicy from "../PrivacyPolicy";

// Mock específico para este test
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, opts?: { returnObjects?: boolean }) => {
      if (key === "sections.data.items" && opts?.returnObjects) {
        return ["Dato 1", "Dato 2"];
      }

      if (key === "sections.rights.items" && opts?.returnObjects) {
        return ["Derecho 1", "Derecho 2"];
      }

      return key;
    },
  }),
}));

describe("PrivacyPolicy page", () => {
  it("renders all sections and list items correctly", () => {
    render(<PrivacyPolicy />);

    // Título principal
    expect(
      screen.getByText("privacyPolicy_title")
    ).toBeInTheDocument();

    // Controller
    expect(
      screen.getByText("sections.controller.title")
    ).toBeInTheDocument();

    // Purpose
    expect(
      screen.getByText("sections.purpose.title")
    ).toBeInTheDocument();

    // Data section
    expect(
      screen.getByText("sections.data.title")
    ).toBeInTheDocument();

    // Verifica que los items del array se renderizan
    expect(screen.getByText("Dato 1")).toBeInTheDocument();
    expect(screen.getByText("Dato 2")).toBeInTheDocument();

    // Legal basis
    expect(
      screen.getByText("sections.legalBasis.title")
    ).toBeInTheDocument();

    // Retention
    expect(
      screen.getByText("sections.retention.title")
    ).toBeInTheDocument();

    // Sharing
    expect(
      screen.getByText("sections.sharing.title")
    ).toBeInTheDocument();

    // Rights section
    expect(
      screen.getByText("sections.rights.title")
    ).toBeInTheDocument();

    expect(screen.getByText("Derecho 1")).toBeInTheDocument();
    expect(screen.getByText("Derecho 2")).toBeInTheDocument();

    // Link externo
    const link = screen.getByRole("link", { name: "www.aepd.es" });
    expect(link).toHaveAttribute("href", "https://www.aepd.es");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
