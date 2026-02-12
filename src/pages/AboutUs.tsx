import { useTranslation } from "react-i18next";
import { useMeta } from "../hooks/use-meta";
import { Link } from "react-router-dom";
import "../styles/aboutUs.css";

export default function AboutUs() {
  const { t } = useTranslation();
  const services = [
    { id: 1, hasLink: false },
    { id: 2, hasLink: true },
    { id: 3, hasLink: true },
    { id: 4, hasLink: true },
    { id: 5, hasLink: true },
    { id: 6, hasLink: true },
    { id: 7, hasLink: false },
    { id: 8, hasLink: true },
  ];

  useMeta(t("about_meta_title"), t("about_meta_description"));

  return (
    <section className="layout about">
      <div className="about__grid">
        {/* COLUMN 1 */}
        <div className="about__image">
          <h1 className="about__title">{t("about__title_1")}</h1>
          <img
            src="/assets/laia.webp"
            alt={t("about__alt-img")}
            width="390"
            height="390"
            fetchPriority="high"
          />
          <div className="about__links">
            <a
              href="https://www.linkedin.com/in/laia-fustegueras-8a133151/"
              target="_blank"
              aria-label="LinkedIn de Laia Fustegueras"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/triforiarquitectes"
              target="_blank"
              aria-label="Instagram de Trifori Arquitectes"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <blockquote className="quote">
            <b>{t("about_paragraph_5")}</b>
          </blockquote>
        </div>

        {/* COLUMN 2 */}
        <div className="about__who-we-are">
          <h2>{t("about__title_2")}</h2>

          <p dangerouslySetInnerHTML={{ __html: t("about_paragraph_1") }} />
          <p>{t("about_paragraph_2")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("about_paragraph_3") }} />
          <p>{t("about_paragraph_4")}</p>
        </div>

        {/* COLUMN 3 */}
        <div className="about__services">
          <h2>{t("about_services_title")}</h2>

          <div className="services__grid">
            {services.map(({ id, hasLink }) => (
              <div className="service-card" key={id}>
                <div>
                  <h3>{t(`about_service${id}_title`)}</h3>
                  <p>{t(`about_service${id}_description`)}</p>
                </div>
                {hasLink && (
                  <Link
                    to={`/faq?id=${id}`}
                    aria-label={`${t("about_link")} ${t("about_aria-label_link")} ${t(`about_service${id}_title`)}`}
                  >
                    {t("about_link")}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
