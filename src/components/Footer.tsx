import { useTranslation } from "react-i18next";
import SocialNetworks from "./SocialNetworks";
import "../styles/footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__brand-logo">
          <img
            src="/assets/logo-white.png"
            alt="Logo Trifori Arquitectes"
            width="167"
            height="53"
            loading="eager"
          />
        </div>
        <div className="footer__brand-info">
          <strong>{t("footer_title")}</strong>
          <p>{t("footer_description")}</p>
        </div>

        <SocialNetworks />
      </div>
      <div className="footer__copyright">
        <small>
          <span
            className="made-by"
            dangerouslySetInnerHTML={{ __html: t("footer_made_by") }}
          />
          <span>
            © {new Date().getFullYear()} {t("footer_copyright")}
            {" · "}
            <span className="legal-pages">
              <a href="/privacy-policy">{t("privacyPolicy_title")}</a>
            </span>
          </span>
        </small>
      </div>
    </footer>
  );
}
