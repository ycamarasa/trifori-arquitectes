import { useTranslation } from "react-i18next";
import { useMeta } from "../hooks/use-meta";
import "../styles/legal-pages.css";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  const dataItems: string[] =
    (t("sections.data.items", {
      returnObjects: true,
    }) as string[]) || [];
  const rightsItems: string[] =
    (t("sections.rights.items", {
      returnObjects: true,
    }) as string[]) || [];

  useMeta(t("privacyPolicy_meta_title"), t("privacyPolicy_meta_description"));

  return (
    <div className="layout legal-pages">
      <h1>{t("privacyPolicy_title")}</h1>

      <section>
        <h2>{t("sections.controller.title")}</h2>
        <p>
          <strong>{t("sections.controller.responsible")}:</strong>{" "}
          {t("sections.controller.company")}
          <br />
          <strong>{t("sections.controller.vat")}:</strong> B25601121
          <br />
          <strong>{t("sections.controller.address")}:</strong>{" "}
          {t("contact_address")}
          <br />
          <strong>{t("sections.controller.email")}:</strong> laia@trifori.com
        </p>
      </section>

      <section>
        <h2>{t("sections.purpose.title")}</h2>
        <p>{t("sections.purpose.text")}</p>
      </section>

      <section>
        <h2>{t("sections.data.title")}</h2>
        <p>{t("sections.data.intro")}</p>
        <ul>
          {Array.isArray(dataItems) &&
            dataItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h2>{t("sections.legalBasis.title")}</h2>
        <p>{t("sections.legalBasis.text")}</p>
      </section>

      <section>
        <h2>{t("sections.retention.title")}</h2>
        <p>{t("sections.retention.text")}</p>
      </section>

      <section>
        <h2>{t("sections.sharing.title")}</h2>
        <p>{t("sections.sharing.text")}</p>
      </section>

      <section>
        <h2>{t("sections.rights.title")}</h2>
        <p>{t("sections.rights.intro")}</p>
        <ul>
          {Array.isArray(rightsItems) &&
            rightsItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <p>{t("sections.rights.exercise")}</p>
        <p>
          {t("sections.rights.claim")}{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
        </p>
      </section>
    </div>
  );
}
