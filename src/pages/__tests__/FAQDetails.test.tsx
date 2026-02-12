import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import FAQDetails from "../FAQDetails";

// Mock i18n
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, opts?: { returnObjects?: boolean }) => {
      if (opts?.returnObjects) {
        return ["item1", "item2"];
      }
      return key;
    },
  }),
}));

// Mock InstagramEmbed
vi.mock("../../components/InstagramEmbed", () => ({
  default: ({ url }: { url: string }) => (
    <div data-testid="instagram">{url}</div>
  ),
}));

// Mock faqConfig
vi.mock("../FAQConfig", () => ({
  faqConfig: {
    1: {
      titleKey: "faq.title",
      blocks: [
        { type: "text", key: "faq.text" },
        { type: "list", key: "faq.list" },
        { type: "link", key: "faq.instagram" },
        { type: "youtube", key: "https://youtube.com/watch?v=abc123" },
        { type: "youtube", key: "https://youtube.com/watch?" }, // inválido
      ],
    },
  },
}));

describe("FAQDetails", () => {
  it("returns null if config does not exist", () => {
    const { container } = render(<FAQDetails id={999} title="Test" />);

    expect(container.firstChild).toBeNull();
  });

  it("renders all block types correctly", () => {
    render(<FAQDetails id={1} title="Imagen test" />);

    // title
    expect(screen.getByText("faq.title")).toBeInTheDocument();

    // text block
    expect(screen.getByText("faq.text")).toBeInTheDocument();

    // list block
    expect(screen.getByText("item1")).toBeInTheDocument();
    expect(screen.getByText("item2")).toBeInTheDocument();

    // instagram block
    expect(screen.getByTestId("instagram")).toBeInTheDocument();

    // youtube iframe
    const iframe = screen.getByTitle("YouTube video player");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/abc123",
    );

    // background image
    expect(screen.getByAltText("Imagen test")).toBeInTheDocument();
  });

  it("hides spinner after youtube iframe loads", () => {
    render(<FAQDetails id={1} title="Imagen test" />);

    const iframe = screen.getByTitle("YouTube video player");

    // spinner visible antes
    expect(document.querySelector(".embed-spinner")).toBeInTheDocument();

    // simulamos load
    fireEvent.load(iframe);

    // spinner desaparece
    expect(document.querySelector(".embed-spinner")).not.toBeInTheDocument();
  });
});
