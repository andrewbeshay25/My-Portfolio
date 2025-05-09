"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Load mode from localStorage if available
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);

    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color mode"
      className="ml-4 p-1.5 rounded-full border border-[color:var(--color-accent)] transition hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-background)]"
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
}
