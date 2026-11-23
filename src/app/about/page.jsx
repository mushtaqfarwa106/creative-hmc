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
          padding: "72px 0 84px",
        }}
      >
        <div className="w">
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            ABOUT US
          </div>
          <h1 style={{ marginBottom: "32px" }}>
            ONE TEAM.
            <br />
            COMPLETE SOLUTIONS.
          </h1>
          <p
            style={{
              maxWidth: "74ch",
              fontSize: "19px",
              lineHeight: 1.65,
              color: "#141414",
              margin: 0,
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
          padding: "84px 0 0",
          overflow: "hidden",
        }}
      >
        <div className="w">
          {/* Mission & Vision */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "48px",
              paddingBottom: "64px",
            }}
          >
            <Reveal>
              <div>
                <div
                  style={{
                    width: "160px",
                    height: "3px",
                    backgroundColor: "#EE402D",
                    marginBottom: "28px",
                  }}
                />
                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "28px",
                    marginBottom: "14px",
                  }}
                >
                  OUR MISSION
                </h2>
                <p
                  style={{
                    color: "#e6e6e6",
                    fontSize: "17px",
                    lineHeight: 1.65,
                    margin: 0,
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
              <div>
                <div
                  style={{
                    width: "160px",
                    height: "3px",
                    backgroundColor: "#EE402D",
                    marginBottom: "28px",
                  }}
                />
                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "28px",
                    marginBottom: "14px",
                  }}
                >
                  OUR VISION
                </h2>
                <p
                  style={{
                    color: "#e6e6e6",
                    fontSize: "17px",
                    lineHeight: 1.65,
                    margin: 0,
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
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "32px",
              paddingBottom: "64px",
            }}
          >
            {VALUES.map((v, i) => (
              <Reveal key={v[0]} delay={i * 0.08}>
                <div>
                  <h3
                    style={{
                      color: "#EE402D",
                      fontSize: "17px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      marginBottom: "10px",
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
            fontSize: "clamp(72px, 19vw, 240px)",
            fontWeight: 700,
            lineHeight: 0.82,
            letterSpacing: "0.02em",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.28)",
            userSelect: "none",
            paddingBottom: "8px",
          }}
        >
          CREATIVE
        </div>
      </section>

      {/* 3. White Section Below Black Band: Trusted Partners / Logo Grid */}
      <section style={{ backgroundColor: "#ffffff", color: "#111111" }}>
        <div className="w">
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "10px",
              color: "#111111",
            }}
          >
            OUR CLIENTS
          </div>
          <Reveal>
            <h2 style={{ marginBottom: "18px" }}>
              TRUSTED ACROSS INDUSTRIES.
            </h2>
          </Reveal>
          <div
            style={{
              width: "150px",
              height: "3px",
              backgroundColor: "#EE402D",
              marginBottom: "22px",
            }}
          />
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.55,
              color: "#222222",
              marginBottom: "36px",
            }}
          >
            We work with clinics, restaurants, hotels, retail brands and
            wellness centres across the UAE.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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