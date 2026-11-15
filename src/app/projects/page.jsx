import { Reveal } from "../../components/RevealOnScroll";
import ProjectGrid from "../../components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <>
      <div className="ph">
        <div className="w">
          <div className="eb">PROJECTS</div>
          <h1>
            Diverse spaces.
            <br />
            One standard.
          </h1>
        </div>
      </div>
      <section>
        <div className="w">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}