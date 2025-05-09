export default function AboutPage() {
    return (
      <main className="px-6 py-12 max-w-4xl mx-auto space-y-12">
        {/* Intro */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[color:var(--color-primary)]">My Story</h1>
          <p className="mt-4 text-lg text-[color:var(--color-text)]">
            I’m Andrew Beshay — a developer and servant-leader passionate about building software that empowers communities, especially those in underserved or faith-based contexts.
          </p>
          <p className="mt-2 text-[color:var(--color-text)]">
            Whether I’m leading the development of my church’s iOS app or building scalable backends for platforms like ARK and Commentate, my goal is simple: create tools that make life easier and more meaningful.
          </p>
        </section>
  
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-[color:var(--color-primary)]">Technical Skills</h2>
          <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-[color:var(--color-text)]">
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>TypeScript</li>
            <li>React & Next.js</li>
            <li>FastAPI</li>
            <li>Firebase</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
          </ul>
        </section>
  
        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-[color:var(--color-primary)]">Mission & Values</h2>
          <p className="mt-4 text-[color:var(--color-text)]">
            I believe in technology that uplifts. My mission is to combine technical skill with empathy — solving real problems with scalable, accessible software. Collaboration, service, and continuous growth drive every project I take on.
          </p>
        </section>
      </main>
    );
  }
  