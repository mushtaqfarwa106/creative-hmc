import Link from "next/link";
import { Reveal } from "../../components/RevealOnScroll";

export default function AboutPage() {
  const values = [
    ["Craftsmanship", "Technical precision, quality workmanship and attention to every detail."],
    ["Accountability", "Ownership of every stage, from initial concept to final handover."],
    ["Transparency", "Clear communication, honest commitments and defined expectations."],
    ["Respect", "Valuing our clients’ vision, investment and time in every decision."]
  ];

  const sectors = [
    ["Medical Facilities", "Healthcare environments delivered to clinical, operational and regulatory requirements."],
    ["Hospitality Venues", "Restaurants, cafés and hotels with memorable design and operational efficiency."],
    ["Retail Stores", "Retail spaces that express brand identity and support commercial performance."],
    ["Wellness Centres", "Calming spaces that prioritise comfort, functionality and client experience."],
    ["Corporate Offices", "Contemporary workplaces for productivity, collaboration and identity."],
    ["Mixed-Use and Residences", "Integrated commercial developments and refined private residences."]
  ];

  return (
    <>
      <div className="ph">
        <div className="w">
          <div className="eb">ABOUT US</div>
          <h1>One team.<br />Complete solutions.</h1>
        </div>
      </div>
      <section>
        <div className="w">
          <div className="tag">WHO WE ARE</div>
          <Reveal><h2>Design-and-build, <em>under one team</em></h2></Reveal>
          <Reveal>
            <p className="lead" style={{ maxWidth: "70ch" }}>
              Established in Dubai in 2017, Creative HMC Interior Design is a multidisciplinary design-and-build company specialising in healthcare, wellness, hospitality, retail and commercial interiors across the UAE. Architecture, interior design, engineering, authority approvals and construction come together under one accountable team, from initial concept to final handover. As the contracting division of HQ International, Creative HMC provides integrated design-and-build and project execution services.
            </p>
          </Reveal>
       <div style={{ margin: "34px 0", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--ln)" }}>
  <img
    src="/images/about/team.jpeg"
    alt="Creative HMC Team"
    style={{ width: "100%", height: "auto", display: "block" }}
  />
</div>
          <div className="mv">
            <div className="card">
              <h3>Mission</h3>
              <p>To create purposeful, functional, and inspiring environments through thoughtful design, technical excellence, and quality craftsmanship, delivering seamless design-and-build solutions from concept to completion.</p>
            </div>
            <div className="card">
              <h3>Vision</h3>
              <p>To be the leading design-and-build partner in the UAE, recognised for excellence, reliability, and innovation in healthcare, wellness, and commercial environments.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mist">
        <div className="w">
          <div className="tag">CORE VALUES</div>
          <Reveal><h2>What we <em>stand for</em></h2></Reveal>
          <div className="g3">
            {values.map((v, i) => (
              <Reveal key={v[0]} delay={i * 0.08} className="card">
                <h3>{v[0]}</h3>
                <p>{v[1]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="tag">SECTORS</div>
          <Reveal><h2>Diverse spaces. <em>One standard.</em></h2></Reveal>
          <div className="g3">
            {sectors.map((s, i) => (
              <Reveal key={s[0]} delay={i * 0.08} className="card">
                <h3>{s[0]}</h3>
                <p>{s[1]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}