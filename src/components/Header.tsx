import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/header.css";

type Language = "en" | "es" | "ca";

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">
            <img
              src="/assets/logo-black.png"
              alt="Logo Trifori arquitectes"
              width="140"
              height="45"
              loading="eager"
            />
          </Link>
        </div>

        <nav className={`header__nav ${menuOpen ? "is-open" : ""}`}>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>
            {t("header_about_us")}
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            {t("header_projects")}
          </Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>
            {t("header_services")}
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            {t("header_contact")}
          </Link>

          <div className="language-switcher mobile">
            <button
              className={i18n.language === "ca" ? "active" : ""}
              onClick={() => changeLanguage("ca")}
            >
              CA
            </button>
            <button
              className={i18n.language === "es" ? "active" : ""}
              onClick={() => changeLanguage("es")}
            >
              ES
            </button>
            <button
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </nav>

        <div className="language-switcher desktop">
          <button
            className={i18n.language === "ca" ? "active" : ""}
            onClick={() => changeLanguage("ca")}
          >
            CA
          </button>
          <button
            className={i18n.language === "es" ? "active" : ""}
            onClick={() => changeLanguage("es")}
          >
            ES
          </button>
          <button
            className={i18n.language === "en" ? "active" : ""}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
        </div>

        <button
          className={`header__burger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
