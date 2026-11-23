"use client";
import { useEffect, useRef } from "react";

export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`rv ${className}`} style={{ "--d": `${delay}s` }}>
      {children}
    </div>
  );
}

export function StatCounter({ target, suffix = "", label, delay = 0 }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / 1400, 1);
            el.textContent = `${Math.round(target * p)}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix]);

  return (
    <Reveal delay={delay}>
      <b ref={numRef}>0</b>
      <span>{label}</span>
    </Reveal>
  );
} 