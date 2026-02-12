import { useState } from "react";
import "../styles/projectCarousel.css";

export default function ProjectCarousel({ images, title, }: { images: string[];title: string }) {
  const [index, setIndex] = useState(0);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

  return (
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <img src={images[index]} alt={`${title} - img ${index + 1}`} />

      {images.length > 1 && (
        <div className="carousel__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
      <button
        className="carousel__prev"
        onClick={prev}
        aria-label="Imagen del proyecto"
      >
        <svg viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        className="carousel__next"
        onClick={next}
        aria-label="Imagen del proyecto"
      >
        <svg viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
