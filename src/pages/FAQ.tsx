import { useTranslation } from "react-i18next";
import { useMeta } from "../hooks/use-meta";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import FAQDetails from "./FAQDetails";
import "../styles/faq.css";

export default function FAQ() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get("id")
    ? Number(searchParams.get("id"))
    : null;

  useMeta(t("faq_meta_title"), t("faq_meta_description"));

  useEffect(() => {
    if (activeId) {
      document
        .querySelector(".service-detail-info")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeId]);

  return (
    <>
      <div className="layout service-detail">
        <h1>{t("faq_title")}</h1>

        <div className="service-details__grid">
          {[2, 3, 4, 5, 6, 8].map((id) => (
            <div className="service-card" key={id}>
              <h2>{t(`about_service${id}_title`)}</h2>
              <p>{t(`about_service${id}_description`)}</p>

              <button
                className="faq-link"
                onClick={() => setSearchParams({ id: String(id) })}
              >
                {t("about_link")}
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeId && (
        <FAQDetails id={activeId} title={t(`details.${activeId}.title`)} />
      )}
    </>
  );
}
