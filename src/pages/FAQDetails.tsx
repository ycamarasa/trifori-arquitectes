import { useTranslation } from "react-i18next";
import { useState } from "react";
import { faqConfig } from "./FAQConfig";
import InstagramEmbed from "../components/InstagramEmbed";
import "../styles/faq.css";

type Props = {
  id: number;
  title: string;
};

export default function FAQDetails({ id, title }: Props) {
  const { t } = useTranslation();
  const numericId = Number(id) as keyof typeof faqConfig;
  const config = faqConfig[numericId];

  const [loaded, setLoaded] = useState(false);

  if (!config) return null;

  return (
    <section className="service-detail-info">
      <h1>{t(config.titleKey)}</h1>

      <div className="service-detail-grid">
        <div>
          {config.blocks.map((block, index) => {
            const blockKey = `block-${index}-${block.type}`;

            if (block.type === "text") {
              return (
                <p
                  key={blockKey}
                  dangerouslySetInnerHTML={{ __html: t(block.key) }}
                />
              );
            }

            if (block.type === "list") {
              const items = t(block.key, { returnObjects: true }) as string[];

              return (
                <ul key={blockKey}>
                  {items.map((item, i) => (
                    <li
                      key={`${blockKey}-item-${i}`}
                      dangerouslySetInnerHTML={{ __html: t(item) }}
                    />
                  ))}
                </ul>
              );
            }

            if (block.type === "link") {
              return <InstagramEmbed key={blockKey} url={t(block.key)} />;
            }

            if (block.type === "youtube") {
              const youtubeUrl = t(block.key);
              const videoIdMatch = youtubeUrl.match(/v=([a-zA-Z0-9_-]+)/);
              const videoId = videoIdMatch ? videoIdMatch[1] : null;

              if (!videoId) return null;

              return (
                <div className="embed-wrapper youtube" key={blockKey}>
                  {!loaded && (
                    <div className="embed-spinner">
                      <div className="spinner" />
                    </div>
                  )}

                  <div
                    className="player-wrapper"
                    key={blockKey}
                    style={{ margin: "0 auto" }}
                  >
                    <iframe
                      width="500"
                      height="450"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video player"
                      sandbox="allow-scripts allow-same-origin"
                      allowFullScreen
                      loading="lazy"
                      onLoad={() => setLoaded(true)}
                    />
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
        <img
          src={`/assets/faq-${id}.jpg`}
          alt={title}
          aria-hidden="true"
          className="bg-image"
        />
      </div>
    </section>
  );
}
