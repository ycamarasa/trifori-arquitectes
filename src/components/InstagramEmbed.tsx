import { useEffect } from "react";

interface InstagramEmbedProps {
  url: string;
}

type InstagramWindow = {
  Embeds?: {
    process: () => void;
  };
};

declare global {
  interface Window {
    instgrm?: InstagramWindow;
  }
}


const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds?.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    <div className="embed-wrapper instagram">
      <div
        className="instagram-medias"
        style={{ maxWidth: "540px" }}
        dangerouslySetInnerHTML={{
          __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote>`,
        }}
      />
      <div className="embed-spinner">
        <div className="spinner" />
      </div>
    </div>
  );
};

export default InstagramEmbed;
