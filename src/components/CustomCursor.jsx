"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = 200;
    let rx = x;
    let ry = y;
    let rafId;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.classList.toggle(
          "hot",
          !!e.target.closest("a, button, .card, .t")
        );
        const onDark = !!e.target.closest(".dk, footer, .md") && !e.target.closest(".mb2");
        ringRef.current.classList.toggle("inv", onDark);
        if (dotRef.current) dotRef.current.classList.toggle("inv", onDark);
      }

      const card = e.target.closest(".card");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }
    };

    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="ring" ref={ringRef} />
      <div className="dot" ref={dotRef} />
    </>
  );
}