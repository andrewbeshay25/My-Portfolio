import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Andrew Beshay
        </Link>
        <div className="flex space-x-6">
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
