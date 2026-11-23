import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "../../../data/siteData";
import { slugifyProject } from "../../../components/ProjectGrid";

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = PROJECTS.find((item) => slugifyProject(item.name) === slug);

  if (!project) {
    notFound();
  }

  const photos =
    Array.isArray(project.gallery) && project.gallery.length > 0
      ? project.gallery
      : [project.img];

  return (
    <main className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-topbar">
          <Link href="/projects" className="project-detail-back">
            ← Back to Projects
          </Link>
          <span className="project-detail-sector">
            {project.sector} • {project.city}
          </span>
        </div>

        <h1 className="project-detail-title">{project.name}</h1>

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
        </p>

        <div className="project-gallery-grid">
          {photos.map((photoSrc, index) => (
            <figure
              key={`${photoSrc}-${index}`}
              className="project-gallery-item"
            >
              <img
                src={photoSrc}
                alt={`${project.name} photo ${index + 1}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}