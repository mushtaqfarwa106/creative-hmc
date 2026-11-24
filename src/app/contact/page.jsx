import WhatsAppSelector from "@/components/WhatsAppSelector";
import EnquiryForm from "@/components/EnquiryForm";

export default function ContactPage() {
  return (
    <>
      <div className="ph">
        <div className="w">
          <div className="eb">CONTACT US</div>
          <h1>
            Let’s plan
            <br />
            your space.
          </h1>
        </div>
      </div>
      <section className="dk">
        <div className="w ct">
          <div style={{ minWidth: 0 }}>
            <div className="tag">WHATSAPP</div>
            <h2>
              Tell us about your <em>project</em>
            </h2>
            <p className="lead">Pick a project type and message us.</p>
            <WhatsAppSelector />

            <div className="contact-info-grid">
              <div className="card" style={{ background: "#1b1b1b", borderColor: "#333", minWidth: 0 }}>
                <h3>Call</h3>
                <p>
                  <a href="tel:+97142611633" style={{ color: "#e5e5e5" }}>
                    +971 4 26 116 33
                  </a>
                  <br />
                  <a href="tel:+97142216145" style={{ color: "#e5e5e5" }}>
                    +971 4 221 6145
                  </a>
                  <br />
                  <a href="tel:+971551080986" style={{ color: "#e5e5e5" }}>
                    +971 55 108 0986
                  </a>
                </p>
              </div>

              <div className="card" style={{ background: "#1b1b1b", borderColor: "#333", minWidth: 0 }}>
                <h3>Visit</h3>
                <p style={{ color: "#e5e5e5" }}>
                  Office No. 705, Business Avenue, Deira, Dubai, U.A.E.
                  <br />
                  P.O. Box: 183003
                  <br />
                  Licence No. 788951
                  <br />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Business+Avenue+Deira+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#EE402D" }}
                  >
                    Open in Google Maps →
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div style={{ minWidth: 0 }}>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}