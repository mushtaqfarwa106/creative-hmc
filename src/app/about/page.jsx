"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "../../components/RevealOnScroll";
import { CLIENT_LOGOS } from "../../components/TrustedLogosSlider";

const VALUES = [
  [
    "CRAFTSMANSHIP",
    "Delivering excellence through technical precision, quality workmanship, and attention to every detail.",
  ],
  [
    "ACCOUNTABILITY",
    "Taking ownership of every stage, from initial concept to final handover.",
  ],
  [
    "TRANSPARENCY",
    "Building trust through clear communication, honest commitments, and defined expectations.",
  ],
  [
    "RESPECT",
    "Valuing our clients’ vision, investment, and time in every decision we make.",
  ],
];

export default function AboutPage() {
  const [failedLogos, setFailedLogos] = useState({});

  return (
    <>
      {/* 1. Red / Orange-Red Top Section: Hero + Who We Are */}
      <div
        style={{
          backgroundColor: "#EE402D",
          color: "#111111",
          padding: "clamp(48px, 7vw, 84px) 0 clamp(56px, 8vw, 88px)",
          overflowX: "clip",
        }}
      >
        <div className="w" style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "12px",
              textAlign: "left",
            }}
          >
            ABOUT US
          </div>
          <h1
            style={{
              marginBottom: "clamp(20px, 3.5vw, 32px)",
              textAlign: "left",
              maxWidth: "100%",
            }}
          >
            ONE TEAM.
            <br />
            COMPLETE SOLUTIONS.
          </h1>
          <p
            style={{
              width: "100%",
              maxWidth: "100%",
              fontSize: "clamp(15.5px, 1.45vw, 19px)",
              lineHeight: 1.65,
              color: "#141414",
              margin: 0,
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            Established in Dubai in 2017, Creative HMC Interior Design is a
            multidisciplinary design-and-build company specialising in
            healthcare, wellness, hospitality, retail, and commercial interiors
            across the UAE. With extensive experience in clinics, hospitals,
            medical centres, and wellness facilities, we deliver comprehensive
            design-and-build solutions that balance aesthetics, functionality,
            and technical precision. Our integrated approach brings architecture,
            interior design, engineering, authority approvals, and construction
            together under one accountable team. From initial concept to final
            handover, we manage every stage with a commitment to quality,
            attention to detail, and the successful delivery of each project.
          </p>
        </div>
      </div>

      {/* 2. Black Section: Our Mission, Our Vision, Core Values & Outlined CREATIVE Mark */}
      <section
        style={{
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "clamp(56px, 8vw, 84px) 0 0",
          overflow: "clip",
        }}
      >
        <div className="w" style={{ minWidth: 0 }}>
          {/* Mission & Vision */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "clamp(28px, 4vw, 48px)",
              paddingBottom: "clamp(44px, 6vw, 64px)",
              alignItems: "start",
            }}
          >
            <Reveal>
              <div style={{ textAlign: "left", minWidth: 0, width: "100%" }}>
                <div
                  style={{
                    width: "160px",
                    maxWidth: "100%",
                    height: "3px",
                    backgroundColor: "#EE402D",
                    marginBottom: "24px",
                  }}
                />
                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(22px, 2.4vw, 28px)",
                    marginBottom: "14px",
                    textAlign: "left",
                  }}
                >
                  OUR MISSION
                </h2>
                <p
                  style={{
                    color: "#e6e6e6",
                    fontSize: "clamp(15px, 1.3vw, 17px)",
                    lineHeight: 1.65,
                    margin: 0,
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  To create purposeful, functional, and inspiring environments
                  through thoughtful design, technical excellence, and quality
                  craftsmanship. We are committed to delivering seamless
                  design-and-build solutions with precision, integrity, and
                  attention to every detail, from concept to completion.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ textAlign: "left", minWidth: 0, width: "100%" }}>
                <div
                  style={{
                    width: "160px",
                    maxWidth: "100%",
                    height: "3px",
                    backgroundColor: "#EE402D",
                    marginBottom: "24px",
                  }}
                />
                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(22px, 2.4vw, 28px)",
                    marginBottom: "14px",
                    textAlign: "left",
                  }}
                >
                  OUR VISION
                </h2>
                <p
                  style={{
                    color: "#e6e6e6",
                    fontSize: "clamp(15px, 1.3vw, 17px)",
                    lineHeight: 1.65,
                    margin: 0,
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  To be the leading design-and-build partner in the UAE,
                  recognised for excellence, reliability, and innovation in
                  delivering exceptional healthcare, wellness, and commercial
                  environments.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Core Values */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "clamp(24px, 3vw, 32px)",
              paddingBottom: "clamp(44px, 6vw, 64px)",
              alignItems: "start",
            }}
          >
            {VALUES.map((v, i) => (
              <Reveal key={v[0]} delay={i * 0.08}>
                <div style={{ textAlign: "left", minWidth: 0, width: "100%" }}>
                  <h3
                    style={{
                      color: "#EE402D",
                      fontSize: "16px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {v[0]}
                  </h3>
                  <p
                    style={{
                      color: "#e0e0e0",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      margin: 0,
                      textAlign: "left",
                    }}
                  >
                    {v[1]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Outlined CREATIVE Wordmark at Bottom of Black Section */}
        <div
          aria-hidden="true"
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "clamp(54px, 17.5vw, 240px)",
            fontWeight: 700,
            lineHeight: 0.82,
            letterSpacing: "0.02em",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.28)",
            userSelect: "none",
            paddingBottom: "8px",
            overflow: "hidden",
          }}
        >
          CREATIVE
        </div>
      </section>

      {/* 3. White Section Below Black Band: Trusted Partners / Logo Grid */}
      <section
        style={{
          backgroundColor: "#ffffff",
          color: "#111111",
          overflowX: "clip",
        }}
      >
        <div className="w" style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "10px",
              color: "#111111",
              textAlign: "left",
            }}
          >
            OUR CLIENTS
          </div>
          <Reveal>
            <h2 style={{ marginBottom: "18px", textAlign: "left" }}>
              TRUSTED ACROSS INDUSTRIES.
            </h2>
          </Reveal>
          <div
            style={{
              width: "150px",
              maxWidth: "100%",
              height: "3px",
              backgroundColor: "#EE402D",
              marginBottom: "22px",
            }}
          />
          <p
            style={{
              fontSize: "clamp(15.5px, 1.4vw, 18px)",
              lineHeight: 1.55,
              color: "#222222",
              marginBottom: "36px",
              textAlign: "left",
            }}
          >
            We work with clinics, restaurants, hotels, retail brands and
            wellness centres across the UAE.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
              gap: "16px",
            }}
          >
            {CLIENT_LOGOS.map((item) => {
              const isFallback = failedLogos[item.alt];
              return (
                <div
                  key={item.alt}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #ececec",
                    height: "110px",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    minWidth: 0,
                  }}
                >
                  {!isFallback ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      onError={() =>
                        setFailedLogos((prev) => ({
                          ...prev,
                          [item.alt]: true,
                        }))
                      }
                      style={{
                        maxHeight: "52px",
                        maxWidth: "100%",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "15px",
                        letterSpacing: "0.04em",
                        color: "#111111",
                      }}
                    >
                      {item.alt}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="band">
        <h2>Have a space to design and build? Tell us about it.</h2>
        <Link className="btn k" href="/contact">
          Start a Conversation →
        </Link>
      </div>
    </>
  );
}