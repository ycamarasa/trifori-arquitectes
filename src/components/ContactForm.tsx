import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useContactSchema, type ContactFormData } from "./contactFormSchema";
import "../styles/contactForm.css";

// ACCESS_KEY of Web3Forms is public, don't need .env
// https://docs.web3forms.com/getting-started/faq
const ACCESS_KEY = "6add3f22-4199-4d81-87b0-012c320abd00";

export default function ContactForm() {
  const { t } = useTranslation();
  const [result, setResult] = useState<"success" | "error" | "">("");
  const contactSchema = useContactSchema();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const formData = new FormData();

    formData.append("access_key", ACCESS_KEY);
    formData.append("name", `${data.name} ${data.lastName ?? ""}`);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setResult("success");
        reset();
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form__row">
        <div className="field">
          <input
            id="name"
            {...register("name")}
            placeholder=" "
            autoComplete="given-name"
          />
          <label htmlFor="name">{`${t("form_name")}*`}</label>
          {errors.name && <span role="alert">{errors.name.message}</span>}
        </div>

        <div className="field">
          <input
            id="lastName"
            {...register("lastName")}
            placeholder=" "
            autoComplete="family-name"
          />
          <label htmlFor="lastName">{`${t("form_lastName")}*`}</label>
          {errors.lastName && (
            <span role="alert">{errors.lastName.message}</span>
          )}
        </div>
      </div>

      <div className="field">
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder=" "
          autoComplete="email"
        />
        <label htmlFor="email">{`${t("form_email")}*`}</label>
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>

      <div className="field">
        <input
          id="phone"
          type="phone"
          {...register("phone")}
          placeholder=" "
          autoComplete="phone"
        />
        <label htmlFor="phone">{`${t("form_phone")}*`}</label>
        {errors.phone && <span role="alert">{errors.phone.message}</span>}
      </div>

      <div className="field textarea">
        <textarea
          id="message"
          rows={15}
          {...register("message")}
          placeholder=" "
          autoComplete="message"
        />
        <label htmlFor="message">{`${t("form_message")}*`}</label>
        {errors.message && <span role="alert">{errors.message.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t("form_sending") : t("form_button")}
      </button>

      {result === "success" && (
        <p
          role="status"
          dangerouslySetInnerHTML={{ __html: t("form_success") }}
        />
      )}

      {result === "error" && <p role="alert">{t("form_error")}</p>}
    </form>
  );
}
