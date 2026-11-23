import fs from "node:fs";
import path from "node:path";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PROJECTS, slugifyProject } from "@/data/siteData";

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

function ProjectDetailSkeleton() {
  return (
    <div className="project-detail-container" aria-busy="true">
      <div
        style={{
          height: "14px",
          width: "160px",
          background: "#ece8e4",
          borderRadius: "6px",
          marginBottom: "18px",
        }}
      />
      <div
        style={{
          height: "42px",
          width: "60%",
          maxWidth: "460px",
          background: "#ece8e4",
          borderRadius: "8px",
          marginBottom: "24px",
        }}
      />
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          maxHeight: "520px",
          background: "#f3f0ed",
          borderRadius: "10px",
          marginBottom: "28px",
        }}
      />
      <div className="project-gallery-grid">
        {[0, 1, 2].map((n) => (
          <div
            key={n}
            style={{
              width: "100%",
              aspectRatio: "16 / 10",
              background: "#f3f0ed",
              borderRadius: "4px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

async function ProjectDetailContent({ params }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams?.slug || "").trim().toLowerCase();

  const project = PROJECTS.find(
    (item) => slugifyProject(item.name).toLowerCase() === slug
  );

  if (!project) {
    notFound();
  }

  const folderPhotos = getFolderImages(project.galleryFolder);
  const photos =
    folderPhotos.length > 0
      ? folderPhotos
      : Array.isArray(project.gallery) && project.gallery.length > 0
        ? project.gallery
        : project.img
          ? [project.img]
          : [];

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
            decoding="async"
            fetchPriority="high"
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
                  decoding="async"
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
      <Suspense fallback={<ProjectDetailSkeleton />}>
        <ProjectDetailContent params={params} />
      </Suspense>
    </main>
  );
}