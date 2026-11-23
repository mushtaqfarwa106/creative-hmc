"use client";

import { useEffect, useState } from "react";

export const CLIENT_LOGOS = [
  { src: encodeURI("/images/logos/01-HQI-Client-Logos.svg"), alt: "01-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/02-HQI-Client-Logos.svg"), alt: "02-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/04-HQI-Client-Logos.svg"), alt: "04-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/05-HQI-Client-Logos.svg"), alt: "05-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/06-HQI-Client-Logos.svg"), alt: "06-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/09-HQI-Client-Logos.svg"), alt: "09-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/10-HQI-Client-Logos.svg"), alt: "10-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/11-HQI-Client-Logos.svg"), alt: "11-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/12-HQI-Client-Logos.svg"), alt: "12-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/13-HQI-Client-Logos.svg"), alt: "13-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/14-HQI-Client-Logos.svg"), alt: "14-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/15-HQI-Client-Logos.svg"), alt: "15-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/17 HQI Client Logos.svg"), alt: "17 HQI Client Logos" },
  { src: encodeURI("/images/logos/18-HQI-Client-Logos.svg"), alt: "18-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/19-HQI-Client-Logos.svg"), alt: "19-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/20-HQI-Client-Logos.svg"), alt: "20-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/21-HQI-Client-Logos.svg"), alt: "21-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/22-HQI-Client-Logos.svg"), alt: "22-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/23 HQI Client Logos.svg"), alt: "23 HQI Client Logos" },
  { src: encodeURI("/images/logos/24-HQI-Client-Logos.svg"), alt: "24-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/25-HQI-Client-Logos.svg"), alt: "25-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/26-HQI-Client-Logos.svg"), alt: "26-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/27-HQI-Client-Logos.svg"), alt: "27-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/28-HQI-Client-Logos.svg"), alt: "28-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/29 HQI Client Logos.svg"), alt: "29 HQI Client Logos" },
  { src: encodeURI("/images/logos/30-HQI-Client-Logos.svg"), alt: "30-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/31-HQI-Client-Logos.svg"), alt: "31-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/32-HQI-Client-Logos.svg"), alt: "32-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/33-HQI-Client-Logos.svg"), alt: "33-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/34-HQI-Client-Logos.svg"), alt: "34-HQI-Client-Logos" },
  { src: encodeURI("/images/logos/35-HQI-Client-Logos.svg"), alt: "35-HQI-Client-Logos" },
];

function getVisibleCount(width) {
  if (width >= 1200) return 6;
  if (width >= 640) return 5;
  return 3;
}

function LogoSlideItem({ logo }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="logo-slider-slide">
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function TrustedLogosSlider({ logos = CLIENT_LOGOS }) {
  const [visibleCount, setVisibleCount] = useState(5);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const updateCount = () => {
      setVisibleCount(getVisibleCount(window.innerWidth));
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const total = logos.length;
  const extendedLogos = total > 0 ? [...logos, ...logos.slice(0, visibleCount)] : [];

  useEffect(() => {
    setAnimate(false);
    setIndex(0);
  }, [visibleCount, total]);

  useEffect(() => {
    if (total <= visibleCount) return;

    const timer = setInterval(() => {
      setAnimate(true);
      setIndex((prev) => prev + 1);
    }, 3600);

    return () => clearInterval(timer);
  }, [total, visibleCount]);

  useEffect(() => {
    if (index === total && total > 0) {
      const resetTimeout = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 620);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, total]);

  if (!total) return null;

  const stepPercent = 100 / visibleCount;

  return (
    <div
      className="logo-slider"
      style={{ "--visible-count": visibleCount }}
      aria-label="Trusted client logos"
    >
      <div className="logo-slider-viewport">
        <div
          className="logo-slider-track"
          style={{
            transform: `translateX(-${index * stepPercent}%)`,
            transition: animate ? "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
        >
          {extendedLogos.map((logo, idx) => (
            <LogoSlideItem key={`${logo.src}-${idx}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}