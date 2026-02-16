import { useTranslation } from "react-i18next";
import { useMeta } from "../hooks/use-meta";
import { useEffect } from "react";
import "../styles/homepage.css";

export default function Homepage() {
  const { t } = useTranslation();

  useMeta(t("homepage_meta_title"), t("homepage_meta_description"));

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
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
          {/* mobile image*/}
          <source
            srcSet="/assets/plano_mobile.webp"
            media="(max-width: 768px)"
            type="image/webp"
          />
          {/* desktop image*/}
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
