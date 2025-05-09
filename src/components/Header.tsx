import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      className="w-full shadow-sm"
      style={{
        background: "var(--color-background)",
        color: "var(--color-text)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link
          href="/"
          className="text-xl font-bold px-3 py-1 rounded-full border border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-background)] transition duration-300"
          style={{ color: "var(--color-accent)" }}>
          AB
      </Link>
        <div className="flex space-x-6 items-center">
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
