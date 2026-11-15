import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteData";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="w fg">
          <div>
            <Link className="logo" href="/" style={{ color: "#fff" }}>
              Creative HMC
            </Link>
            <p style={{ marginTop: "12px" }}>
              Design-and-build interiors across the UAE. Contracting division of HQ International.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div>
            <h4>Sectors</h4>
            <p>Medical</p>
            <p>Hospitality</p>
            <p>Retail</p>
            <p>Wellness</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Business Avenue, Office 705, Sheikh Rashid Rd, Dubai</p>
            <p>info@creativeid.me</p>
            <p>Licence 788951</p>
          </div>
        </div>
      </footer>

      <a
        className="wa"
        href={getWhatsAppUrl("Hello Creative HMC, I’d like to discuss a project.")}
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
          <path d="M4 4h16v12H9l-5 5z" />
        </svg>
      </a>
    </>
  );
}