"use client";
import { useState, useEffect } from "react";
import { PROCESS_STEPS } from "@/data/siteData";

export default function ProcessTimeline() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCur((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="tl">
        <i style={{ width: `${(cur / 4) * 80}%` }} />
        {PROCESS_STEPS.map((step, i) => (
          <button
            key={step.title}
            type="button"
            className={`n ${i === cur ? "on" : ""} ${i < cur ? "dn" : ""}`}
            onClick={() => setCur(i)}
          >
            <u>{i + 1}</u>
            {step.title}
          </button>
        ))}
      </div>
      <div className="card det">
        <small>STEP {cur + 1} OF 5</small>
        <h3>{PROCESS_STEPS[cur].title}</h3>
        <p>{PROCESS_STEPS[cur].desc}</p>
      </div>
    </>
  );
}