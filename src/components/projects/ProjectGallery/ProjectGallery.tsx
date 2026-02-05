import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "../../../types/project";

type Props = {
  images: ProjectImage[];
};

export function ProjectGallery({ images }: Props) {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  if (!images.length) return null;

  const activeImage = images[active];

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, closeModal, goPrev, goNext]);

  return (
    <div className="project-gallery">
      <button
        type="button"
        className="project-gallery__main"
        onClick={() => setModalOpen(true)}
        aria-label="View full size"
      >
        <img src={activeImage.src} alt={activeImage.alt} />
      </button>

      <div className="project-gallery__thumbs">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            className={`project-gallery__thumb-btn ${
              idx === active ? "project-gallery__thumb-btn--active" : ""
            }`}
            onClick={() => setActive(idx)}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>

      {modalOpen && (
        <div
          className="project-gallery__modal"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={closeModal}
        >
          <button
            type="button"
            className="project-gallery__modal-close"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            type="button"
            className="project-gallery__modal-prev"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <div
            className="project-gallery__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="project-gallery__modal-img"
            />
          </div>
          <button
            type="button"
            className="project-gallery__modal-next"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
