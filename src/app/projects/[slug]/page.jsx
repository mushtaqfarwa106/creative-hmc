import fs from "node:fs";
import path from "node:path";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PROJECTS, slugifyProject } from "../../../data/siteData";

const IMAGE_EXTENSIONS = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif"]);

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: slugifyProject(project.name),
  }));
}

function getFolderImages(folderName) {
  if (!folderName) return [];

  try {
    const dirPath = path.join(
      process.cwd(),
      "public",
      "images",
      "projects",
      folderName
    );
    if (!fs.existsSync(dirPath)) return [];

    const files = fs
      .readdirSync(dirPath, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isFile() &&
          IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
      )
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    return files.map(
      (fileName) => `/images/projects/${folderName}/${encodeURIComponent(fileName)}`
    );
  } catch {
    return [];
  }
}

async function ProjectDetailContent({ params }) {
  const { slug } = await params;

  const project = PROJECTS.find((item) => slugifyProject(item.name) === slug);

  if (!project) {
    notFound();
  }

  const folderPhotos = getFolderImages(project.galleryFolder);
  const photos =
    folderPhotos.length > 0
      ? folderPhotos
      : Array.isArray(project.gallery) && project.gallery.length > 0
        ? project.gallery
        : [project.img];

  const mainPhoto = photos[0];
  const morePhotos = photos.slice(1);

  return (
    <div className="project-detail-container">
      <div className="project-detail-topbar">
        <span className="project-detail-sector">
          {project.sector} • {project.city}
        </span>
      </div>

      <h1 className="project-detail-title">{project.name}</h1>

      {/* 1. Main Picture */}
      {mainPhoto && (
        <figure className="project-main-photo">
          <img
            src={mainPhoto}
            alt={`${project.name} main view`}
          />
        </figure>
      )}

      {/* 2. Description & Details */}
      <section className="project-detail-info">
        <p className="project-detail-meta">
          {project.area && project.area !== "-" ? `Area: ${project.area}` : ""}
          {project.area &&
          project.area !== "-" &&
          project.duration &&
          project.duration !== "-"
            ? "  |  "
            : ""}
          {project.duration && project.duration !== "-"
            ? `Duration: ${project.duration}`
            : ""}
          {project.type ? `  |  Type: ${project.type}` : ""}
        </p>

        {project.description && (
          <p className="project-detail-description">{project.description}</p>
        )}
      </section>

      {/* 3. More Pictures */}
      {morePhotos.length > 0 && (
        <section className="project-more-gallery">
          <div className="project-gallery-grid">
            {morePhotos.map((photoSrc, index) => (
              <figure
                key={`${photoSrc}-${index}`}
                className="project-gallery-item"
              >
                <img
                  src={photoSrc}
                  alt={`${project.name} photo ${index + 2}`}
                />
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function ProjectDetailPage({ params }) {
  return (
    <main className="project-detail-page">
      <Suspense fallback={<div className="project-detail-container" />}>
        <ProjectDetailContent params={params} />
      </Suspense>
    </main>
  );
}