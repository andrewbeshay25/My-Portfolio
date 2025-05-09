"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Developer • Development Team Leader • Mission-Driven Builder";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center"
      style={{
        background: "var(--color-background)",
        color: "var(--color-text)",
      }}
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4" style={{ color: "var(--color-primary)" }}>
        Andrew Beshay
      </h1>

      <p className="text-lg sm:text-xl font-medium text-[color:var(--color-accent)] transition-all duration-700">
        {typedText}
      </p>

      <p className="mt-6 max-w-xl text-base sm:text-lg">
        I build empowering digital tools for classrooms and communities. From mobile apps to full-stack platforms, my mission is to serve through code.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-background)] font-semibold rounded-lg hover:opacity-90 transition"
        >
          Explore My Work
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border-2 border-[color:var(--color-accent)] text-[color:var(--color-accent)] font-semibold rounded-lg hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-background)] transition"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
}
