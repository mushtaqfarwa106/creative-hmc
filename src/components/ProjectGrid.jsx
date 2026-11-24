"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { PROJECTS, slugifyProject } from "../data/siteData";

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
    </div>
  );
}