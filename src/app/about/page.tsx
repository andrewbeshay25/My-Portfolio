// src/app/about/page.tsx
import { FaLaptopCode, FaHandshake, FaLightbulb } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-[color:var(--color-text)]">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[color:var(--color-primary)] mb-4">
          My Story
        </h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          I’m <span className="font-semibold text-[color:var(--color-accent)]">Andrew Beshay</span> — a developer and team leader passionate about building
          software that helps communities.
        </p>
        <p className="text-md mt-4 max-w-3xl mx-auto">
          Whether I’m leading the development of my church’s iOS app or building scalable
          backends for platforms like ARK and Commentate, my mission is simple: to
          create tools that make life easier and more meaningful.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-[color:var(--color-primary)]">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {["Python", "Java", "C++", "TypeScript", "React & Next.js", "FastAPI", "Firebase", "PostgreSQL", "Docker"].map((skill, idx) => (
            <div
              key={idx}
              className="py-3 px-4 border border-[color:var(--color-accent)] rounded-lg text-sm font-medium bg-[color:var(--color-background)] hover:scale-105 transition-transform"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-[color:var(--color-primary)]">
          Mission & Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-[color:var(--color-accent)] rounded-lg bg-[color:var(--color-background)] text-center">
            <FaHandshake className="text-3xl mx-auto mb-3 text-[color:var(--color-accent)]" />
            <h3 className="font-semibold mb-2">Empathy First</h3>
            <p className="text-sm">
              I prioritize people over product — building solutions that solve real-world
              problems with compassion and clarity.
            </p>
          </div>
          <div className="p-6 border border-[color:var(--color-accent)] rounded-lg bg-[color:var(--color-background)] text-center">
            <FaLaptopCode className="text-3xl mx-auto mb-3 text-[color:var(--color-accent)]" />
            <h3 className="font-semibold mb-2">Build With Purpose</h3>
            <p className="text-sm">
              Every project I take on is driven by a mission — from digital discipleship to
              student tools, I code with intent.
            </p>
          </div>
          <div className="p-6 border border-[color:var(--color-accent)] rounded-lg bg-[color:var(--color-background)] text-center">
            <FaLightbulb className="text-3xl mx-auto mb-3 text-[color:var(--color-accent)]" />
            <h3 className="font-semibold mb-2">Grow Relentlessly</h3>
            <p className="text-sm">
              I believe in lifelong learning. Each challenge is a chance to get sharper,
              smarter, and stronger.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}