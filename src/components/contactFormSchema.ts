import { z } from "zod";
import { useTranslation } from "react-i18next";

export const useContactSchema = () => {
  const { t } = useTranslation();

  return z.object({
    name: z
      .string()
      .min(2, { message: `${t("form_name")}: ${t("form_field_error")}` }),
    lastName: z
      .string()
      .min(2, { message: `${t("form_lastName")}: ${t("form_field_error")}` }),
    email: z.string().refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: `${t("form_email")}: ${t("form_field_email_error")}`,
    }),
    phone: z
      .string()
      .min(9, { message: `${t("form_phone")}: ${t("form_field_error")}` }),
    message: z
      .string()
      .min(10, { message: `${t("form_message")}: ${t("form_field_error")}` }),
  });
};

export type ContactFormData = z.infer<ReturnType<typeof useContactSchema>>;
