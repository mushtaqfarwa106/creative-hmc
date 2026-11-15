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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="#ffffff"
          aria-hidden="true"
        >
          <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.458 3.475 1.331 4.988L2 22l5.184-1.359a9.93 9.93 0 0 0 4.847 1.258h.004c5.515 0 9.969-4.453 9.969-9.969A9.914 9.914 0 0 0 19.08 4.918 9.908 9.908 0 0 0 12.031 2zm5.822 14.281c-.246.693-1.428 1.326-1.979 1.409-.506.076-1.147.108-1.85-.115-.426-.135-.973-.316-1.673-.619-2.946-1.272-4.87-4.238-5.017-4.434-.147-.196-1.198-1.594-1.198-3.041 0-1.447.759-2.158 1.028-2.452.27-.294.588-.368.784-.368.196 0 .392.002.563.01.181.009.423-.069.662.505.246.588.834 2.035.908 2.182.074.147.123.319.025.515-.098.196-.147.319-.294.49-.147.172-.309.383-.441.515-.147.147-.3.306-.129.6.172.294.762 1.257 1.636 2.036 1.124 1.002 2.071 1.313 2.365 1.46.294.147.466.123.638-.074.172-.196.736-.858.932-1.152.196-.294.392-.245.662-.147.27.098 1.716.809 2.01.956.294.147.49.221.563.343.074.123.074.711-.172 1.404z" />
        </svg>
      </a>
    </>
  );
}