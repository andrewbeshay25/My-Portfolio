import Link from "next/link";

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
        <Link href="/" className="text-xl font-bold" style={{ color: "var(--color-accent)" }}>
          Andrew Beshay
        </Link>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
