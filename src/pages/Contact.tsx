import { useTranslation } from "react-i18next";
import { useMeta } from "../hooks/use-meta";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import SocialNetworks from "../components/SocialNetworks";
import "../styles/contact.css";

export default function Contact() {
  const { t } = useTranslation();
  useMeta(t("contact_meta_title"), t("contact_meta_description"));

  const email = "laia@trifori.com";
  const subject = encodeURIComponent("{t('contact_email_subject')}");
  const body = encodeURIComponent("{t('contact_email_body')}");

  return (
    <section className="layout contact-page">
      <div className="contact-header">
        <h1>{t("contact_title")}</h1>
        <p>{t("contact_subtitle")}</p>
      </div>

      <div className="contact-content">
        <div id="contact">
          <ContactForm />
        </div>

        <aside>
          <section className="map-section">
            <Map />
          </section>
          <div className="contact-info">
            <h2>Trifori Arquitectes</h2>

            <div>
              <p>{t("contact_address")}</p>
              <p>[+34] 973 212 064</p>
              <a href="tel:+34659933722" className="contact_phone">[+34] 659 933 722</a>

              <p>
                Email:{" "}
                <a
                  href={`mailto:${email}?subject=${subject}&body=${body}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_email"
                >
                  laia@trifori.com
                </a>
              </p>
            </div>
            <SocialNetworks />
          </div>
        </aside>
      </div>
    </section>
  );
}
