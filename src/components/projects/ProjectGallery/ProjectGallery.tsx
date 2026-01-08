import { useState } from "react";
import type { ProjectImage } from "../../../types/project";

type Props = {
  images: ProjectImage[];
};

export function ProjectGallery({ images }: Props) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  const activeImage = images[active];

  return (
    <div className="project-gallery">
      <div className="project-gallery__main">
        <img src={activeImage.src} alt={activeImage.alt} />
      </div>

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
    </div>
  );
}
