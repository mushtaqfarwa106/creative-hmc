"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { PROJECTS, slugifyProject, getWhatsAppUrl } from "../data/siteData";

const SECTORS = ["All", "Medical", "Hospitality", "Retail", "Wellness"];

export default function ProjectGrid({
  items = PROJECTS,
  limit = null,
  featuredOnly = false,
  showFilter = false,
  sliderControls = false,
}) {
  const [selectedSector, setSelectedSector] = useState("All");
  const gridRef = useRef(null);

  const effectiveLimit =
    typeof limit === "number" ? limit : featuredOnly ? 3 : null;

  const sectorFiltered =
    showFilter && selectedSector !== "All"
      ? items.filter((project) => project.sector === selectedSector)
      : items;

  const visibleProjects =
    typeof effectiveLimit === "number"
      ? sectorFiltered.slice(0, effectiveLimit)
      : sectorFiltered;

  const slideProjects = (direction) => {
    if (!gridRef.current) return;
    const step = Math.max(300, Math.round(gridRef.current.clientWidth * 0.75));
    gridRef.current.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  return (
    <div className="project-grid-wrapper">
      {showFilter && (
        <div className="project-filter-bar">
          {SECTORS.map((sector) => {
            const isActive = selectedSector === sector;
            return (
              <button
                key={sector}
                type="button"
                onClick={() => setSelectedSector(sector)}
                className={`project-filter-btn ${isActive ? "is-active" : ""}`}
              >
                {sector === "All" ? "All Projects" : sector}
              </button>
            );
          })}
        </div>
      )}

      <div
        ref={gridRef}
        className="project-cards-grid project-cards-grid--three"
      >
        {visibleProjects.map((project, idx) => {
          const slug = slugifyProject(project.name);
          return (
            <article
              key={`${project.name}-${project.city}-${idx}`}
              className="project-card-clean"
            >
              <Link href={`/projects/${slug}`} className="project-card-image-box">
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                />
              </Link>

              <div className="project-card-content">
                <div className="project-card-meta-top">
                  <span>{project.sector}</span>
                  <span>{project.city}</span>
                </div>

                <h3 className="project-card-title">{project.name}</h3>

                <p className="project-card-specs">
                  {project.area && project.area !== "-" ? project.area : ""}
                  {project.area &&
                  project.area !== "-" &&
                  project.duration &&
                  project.duration !== "-"
                    ? " • "
                    : ""}
                  {project.duration && project.duration !== "-"
                    ? project.duration
                    : ""}
                </p>

                <Link
                  href={`/projects/${slug}`}
                  className="project-card-see-btn"
                >
                  See Project
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {sliderControls && (
        <div className="project-slider-controls">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={() => slideProjects(-1)}
            className="project-slider-arrow"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next projects"
            onClick={() => slideProjects(1)}
            className="project-slider-arrow"
          >
            →
          </button>
        </div>
      )}

      {showFilter && (
        <div
          className="project-cta-box"
          style={{
            marginTop: "48px",
            padding: "32px 24px",
            borderRadius: "24px",
            border: "1px solid rgba(239, 65, 35, 0.28)",
            background: "rgba(239, 65, 35, 0.06)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent, #ef4123)",
                marginBottom: "6px",
              }}
            >
              START A CONVERSATION
            </span>
            <h3 style={{ margin: 0 }}>Let’s talk about your project</h3>
            <p style={{ margin: "6px 0 0" }}>
              Planning a medical, retail, or hospitality space in the UAE? Reach out to discuss scope and timelines.
            </p>
          </div>

          <div className="project-cta-actions">
            <a
              className="btn k project-cta-btn"
              style={{
                background: "var(--accent, #ef4123)",
                borderColor: "var(--accent, #ef4123)",
                color: "#ffffff",
              }}
              href={getWhatsAppUrl(
                "Hello Creative HMC, let’s talk about a project I saw on the Projects page."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp →
            </a>
            <Link
              className="btn o project-cta-btn"
              style={{
                borderColor: "var(--accent, #ef4123)",
                color: "var(--accent, #ef4123)",
                background: "#ffffff",
              }}
              href="/contact"
            >
              Contact Page
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}