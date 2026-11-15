"use client";
import { useState } from "react";
import { PROJECTS, getWhatsAppUrl } from "../data/siteData";

export default function ProjectGrid({ featuredOnly = false }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const items = featuredOnly
    ? PROJECTS.filter((p) => p.featured)
    : PROJECTS.filter((p) => filter === "All" || p.sector === filter);

  return (
    <>
      {!featuredOnly && (
        <div className="chips">
          {["All", "Medical", "Hospitality", "Retail", "Wellness"].map((sec) => (
            <button
              key={sec}
              type="button"
              className={`chip ${filter === sec ? "on" : ""}`}
              onClick={() => setFilter(sec)}
            >
              {sec}
            </button>
          ))}
        </div>
      )}

      <div className={featuredOnly ? "bento" : "pgrid"}>
        {items.map((proj) => (
          <div
            key={proj.name}
            className="t"
            style={{
              "--h": proj.hue,
              backgroundImage: proj.img ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${proj.img})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setSelected(proj)}
          >
            <b>{proj.name}</b>
            <span>
              {proj.sector} · {proj.city} {proj.area !== "-" ? ` · ${proj.area}` : ""}
            </span>
          </div>
        ))}
      </div>

      {selected && (
        <div className="md" onClick={() => setSelected(null)}>
          <div className="mb2" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.name}</h3>
            <span className="cp">{selected.sector}</span>
            <span className="cp">{selected.city}</span>
            {selected.area !== "-" && <span className="cp">Area {selected.area}</span>}
            {selected.duration !== "-" && (
              <span className="cp">Duration {selected.duration}</span>
            )}
            <div className="gl" style={{ "--h": selected.hue }}>
              {selected.gallery && selected.gallery.length > 0 ? (
                selected.gallery.map((imgSrc, i) => (
                  <div key={i} style={{ padding: 0, overflow: "hidden", borderRadius: "14px" }}>
                    <img src={imgSrc} alt={`${selected.name} ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                ))
              ) : (
                <div>Project photo 1</div>
              )}
            </div>
            <a
              className="btn r"
              target="_blank"
              rel="noopener noreferrer"
              href={getWhatsAppUrl(
                `Hello Creative HMC, I saw ${selected.name} and would like a similar project.`
              )}
            >
              Discuss a similar project →
            </a>
            <button
              type="button"
              className="btn o"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}