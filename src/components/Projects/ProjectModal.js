import React, { useEffect } from "react";
import "./ProjectModal.css";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} title="Close (ESC)">
          ✕
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="modal-info">
            <h2 className="modal-title">{project.title}</h2>

            <div className="modal-tags">
              {project.tags?.map((tag, index) => (
                <span key={index} className="modal-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="modal-description">
              <p>{project.fullDescription || project.description}</p>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="modal-features">
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.links && (
              <div className="modal-links">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button github"
                  >
                    🐙 GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button demo"
                  >
                    🚀 Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
