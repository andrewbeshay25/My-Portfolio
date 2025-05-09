import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Andrew Beshay
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="text-text hover:text-primary transition">
            About
          </Link>
          <Link href="/projects" className="text-text hover:text-primary transition">
            Projects
          </Link>
          <Link href="/contact" className="text-text hover:text-primary transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
