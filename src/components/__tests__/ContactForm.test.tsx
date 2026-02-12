import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import ContactForm from "../ContactForm";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("ContactForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const fillForm = () => {
    fireEvent.change(screen.getByLabelText("form_name*"), {
      target: { value: "John" },
    });

    fireEvent.change(screen.getByLabelText("form_lastName*"), {
      target: { value: "Doe" },
    });

    fireEvent.change(screen.getByLabelText("form_email*"), {
      target: { value: "john@test.com" },
    });

    fireEvent.change(screen.getByLabelText("form_phone*"), {
      target: { value: "123456789" },
    });

    fireEvent.change(screen.getByLabelText("form_message*"), {
      target: { value: "Hello world" },
    });
  };

  it("renders all fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText("form_name*")).toBeInTheDocument();
    expect(screen.getByLabelText("form_lastName*")).toBeInTheDocument();
    expect(screen.getByLabelText("form_email*")).toBeInTheDocument();
    expect(screen.getByLabelText("form_phone*")).toBeInTheDocument();
    expect(screen.getByLabelText("form_message*")).toBeInTheDocument();
  });

  it("submits successfully and shows success message", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: async () => ({ success: true }),
    } as Partial<Response> as Response);

    render(<ContactForm />);
    fillForm();

    fireEvent.click(screen.getByRole("button", { name: "form_button" }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });

  it("shows error if API returns success false", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: async () => ({ success: false }),
    } as Partial<Response> as Response);

    render(<ContactForm />);
    fillForm();

    fireEvent.click(screen.getByRole("button", { name: "form_button" }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });

  it("shows error if fetch throws", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("Network error"));

    render(<ContactForm />);
    fillForm();

    fireEvent.click(screen.getByRole("button", { name: "form_button" }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });
});
