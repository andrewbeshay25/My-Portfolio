// src/app/contact/page.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-[color:var(--color-text)]">
      <h1 className="text-4xl font-bold text-[color:var(--color-primary)] mb-6 text-center">
        Let’s Build Something Together
      </h1>
      <p className="mb-8 text-sm text-center">
        Prefer to connect directly?
      </p>

      <div className="flex justify-center gap-6 mb-12">
        <a
          href="https://github.com/andrewbeshay25"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg px-4 py-2 rounded-lg border border-[color:var(--color-accent)] text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-background)] transition transform hover:scale-110"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/andrew-beshay1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg px-4 py-2 rounded-lg border border-[color:var(--color-accent)] text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-background)] transition transform hover:scale-110"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>

      <form className="space-y-6 opacity-40 hover:opacity-100 transition-opacity">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            id="name"
            type="text"
            className="w-full p-3 rounded-lg border bg-transparent border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded-lg border bg-transparent border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-3 rounded-lg border bg-transparent border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-background)] rounded-lg font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}