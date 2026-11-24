import Link from "next/link";
import { SERVICES, SECTORS_MARQUEE } from "@/data/siteData";
import { Reveal, StatCounter } from "../components/RevealOnScroll";
import ProcessTimeline from "../components/ProcessTimeline";
import ProjectGrid from "../components/ProjectGrid";
import TrustedLogosSlider from "../components/TrustedLogosSlider";

export default function HomePage() {
  return (
    <>
      {/* Clean Red Hero */}
      <div className="hero">
        <div
          className="w"
          style={{
            gridTemplateColumns: "minmax(0, 1fr)",
            minHeight: "76vh",
          }}
        >
          <div>
            <div className="eb">DUBAI, UAE · SINCE 2017</div>
            <h1>
              One team.
              <br />
              Every detail.
            </h1>
            <p>
              Design-and-build interiors for healthcare, wellness, hospitality and retail across the UAE, from vision to handover.
            </p>
            <Link className="btn k" href="/contact">
              Start a Project →
            </Link>
            <Link className="btn o" href="/projects">
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Big Black Counters */}
      <div className="w stats">
        <StatCounter target={2017} label="Established in Dubai" delay={0} />
        <StatCounter target={100} suffix="+" label="Projects delivered" delay={0.1} />
        <StatCounter target={360} suffix="°" label="Concept to handover" delay={0.2} />
      </div>

      {/* Black Scrolling Sectors Strip */}
      <div className="dk mq">
        <div>
          {[...SECTORS_MARQUEE, ...SECTORS_MARQUEE].map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
      </div>

      {/* 6 Services Grid with Red Mouse Glow */}
      <section>
        <div className="w">
          <div className="tag">CAPABILITIES</div>
          <Reveal>
            <h2>
              Six services under <em>one roof</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className="lead">One accountable team, so nothing falls between contractors.</p>
          </Reveal>
          <div className="g3">
            {SERVICES.map((svc, idx) => (
              <Reveal key={svc.num} delay={idx * 0.08} className="card">
                <div className="ic">{svc.num}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: "26px" }}>
            <Link className="btn o" href="/services">
              All services →
            </Link>
          </p>
        </div>
      </section>

      {/* 5-Step Process Timeline */}
      <section className="mist">
        <div className="w">
          <div className="tag">PROCESS</div>
          <Reveal>
            <h2>
              Five stages. <em>One team.</em>
            </h2>
          </Reveal>
          <ProcessTimeline />
        </div>
      </section>

      {/* Selected Work Bento */}
      <section>
        <div className="w">
          <div className="tag">PROJECTS</div>
          <Reveal>
            <h2>
              Selected <em>work</em>
            </h2>
          </Reveal>
          <ProjectGrid limit={3} />
          <p style={{ marginTop: "26px" }}>
            <Link className="btn o" href="/projects">
              All projects →
            </Link>
          </p>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="mist">
        <div className="w" style={{ textAlign: "center" }}>
          <div className="tag">OUR CLIENTS</div>
          <Reveal>
            <h2>
              Trusted Across <em>Industries.</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className="lead" style={{ margin: "0 auto 36px" }}>
              Partnering with leading healthcare providers, luxury retail houses, and hospitality brands across the UAE.
            </p>
          </Reveal>
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "24px 20px",
              border: "1px solid var(--ln)",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <TrustedLogosSlider />
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="band">
        <h2>Planning a clinic, hotel or store?</h2>
        <Link className="btn k" href="/contact">
          Start a Project →
        </Link>
      </div>
    </>
  );
}