import Link from "next/link";
import { SERVICES } from "@/data/siteData";
import { Reveal } from "../../components/RevealOnScroll";

export default function ServicesPage() {
  return (
    <>
      <div className="ph">
        <div className="w">
          <div className="eb">OUR SERVICES</div>
          <h1>
            Expertise from
            <br />
            planning to handover.
          </h1>
        </div>
      </div>
      <section>
        <div className="w">
          {SERVICES.map((s) => (
            <div key={s.num} className="sv2">
              <div>
                <div className="nn">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <ul>
                {s.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <div className="band">
        <h2>Need a quote for your space?</h2>
        <Link className="btn k" href="/contact">
          Start a Project →
        </Link>
      </div>
    </>
  );
}