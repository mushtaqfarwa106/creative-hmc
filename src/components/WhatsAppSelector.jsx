"use client";
import { useState } from "react";
import { PROJECT_TYPES, getWhatsAppUrl } from "@/data/siteData";

export default function WhatsAppSelector() {
  const [sel, setSel] = useState(0);

  const message = `Hello Creative HMC, I’d like to discuss a ${PROJECT_TYPES[sel].toLowerCase()} project.`;
  const whatsappUrl = getWhatsAppUrl(message);

  return (
    <>
      <div className="chips">
        {PROJECT_TYPES.map((type, i) => (
          <button
            key={type}
            type="button"
            className={`chip ${i === sel ? "on" : ""}`}
            onClick={() => setSel(i)}
          >
            {type}
          </button>
        ))}
      </div>
      <p className="msg">Message: “{message}”</p>
      <a className="btn r" target="_blank" rel="noopener noreferrer" href={whatsappUrl}>
        Chat on WhatsApp →
      </a>
    </>
  );
}