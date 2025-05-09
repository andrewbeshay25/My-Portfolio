// src/components/Header.tsx
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      className="w-full shadow-sm sticky top-0 z-50 backdrop-blur bg-[color:var(--color-background)]/90 transition duration-300"
    >
      <nav className="w-full px-8 py-4 flex justify-between items-center">
        <div className="flex-1">
          <Link
            href="/"
            className="text-xl font-bold px-3 py-1 rounded-full border border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-background)] transition duration-300"
            style={{ color: "var(--color-accent)" }}
          >
            AB
          </Link>
        </div>
        <div className="flex-1 flex justify-end space-x-6 items-center">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}