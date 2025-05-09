export default function AboutPage() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-text space-y-16">
        {/* Title */}
        <section>
          <h1 className="text-4xl font-extrabold text-primary mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            I’m Andrew Beshay — a developer on a mission to build technology that serves people, not just screens.
            I believe great software should uplift communities, simplify lives, and empower the people using it.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Whether it's leading app development for Coptic churches, designing educational platforms, or experimenting
            with AI tools — I always build with intention, impact, and clarity.
          </p>
        </section>
  
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Skills & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
            <span className="bg-gray-100 px-3 py-2 rounded shadow">Next.js</span>
            <span className="bg-gray-100 px-3 py-2 rounded shadow">Tailwind CSS</span>
            <span className="bg-gray-100 px-3 py-2 rounded shadow">React</span>
            <span className="bg-gray-100 px-3 py-2 rounded shadow">FastAPI</span>
            <span className="bg-gray-100 px-3 py-2 rounded shadow">Firebase</span>
            <span className="bg-gray-100 px-3 py-2 rounded shadow">Swift / SwiftUI</span>
            <span className="bg-gray-100 px-3 py-2 rounded shadow">PostgreSQL</span>
            <span className="bg-gray-100 px-3 py-2 rounded shadow">Docker</span>
          </div>
        </section>
  
        {/* Values */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">My Mission</h2>
          <p className="text-lg leading-relaxed">
            As a Hero-branded developer, my purpose is to solve meaningful problems — not just build for hype.
            I want to use code to create real-world solutions, particularly for underserved communities and faith-based
            organizations. I’m driven by growth, excellence, and service.
          </p>
        </section>
      </main>
    );
  }
  