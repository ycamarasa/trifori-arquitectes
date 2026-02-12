import { useTranslation } from "react-i18next";
import { useMeta } from "../hooks/use-meta";
import { useEffect } from "react";
import "../styles/homepage.css";

export default function Homepage() {
  const { t } = useTranslation();

  const scrollDown = () => {
    const start = window.scrollY;
    const target = window.innerHeight;
    const duration = 4000;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start + (target - start) * ease);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useMeta(t("homepage_meta_title"), t("homepage_meta_description"));

  useEffect(() => {
    // Bloquear scroll del usuario
    const preventScroll = (e: Event) => e.preventDefault();
    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    // Scroll inicial y animación
    window.scrollTo(0, 0);
    const timeout = setTimeout(scrollDown, 1000);

    const handleDblClick = () => {
      window.scrollTo(0, 0);
      scrollDown();
    };
    window.addEventListener("dblclick", handleDblClick);

    // Cleanup al desmontar
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("dblclick", handleDblClick);

      // Desbloquear scroll
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <>
      <div className="homepage">
        <h1 className="homepage__title">
          {t("homepage_title")}
          <br />
          {t("homepage_title_2")}
          <br />
          {t("homepage_title_3")}
        </h1>

        <picture className="homepage__bkg-wrapper">
          {/* Imagen mobile */}
          <source
            srcSet="/assets/plano_mobile.webp"
            media="(max-width: 768px)"
            type="image/webp"
          />
          {/* Imagen desktop */}
          <img
            src="/assets/plano.webp"
            alt={t("homepage_alt_bkg")}
            className="homepage__bkg"
            fetchPriority="high"
            loading="eager"
          />
        </picture>

        <img
          alt={t("homepage_alt_house")}
          className="homepage__house"
          src="/assets/home.webp"
          width={1200}
          height={800}
          fetchPriority="high"
          loading="eager"
          style={{ aspectRatio: "3/2" }}
        />
      </div>
    </>
  );
}
