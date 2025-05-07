export default function HeroSection() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white text-gray-900">
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-600">
          Andrew Beshay – Empowering Tech for Good
        </h1>
        <p className="mt-4 text-xl max-w-xl">
          I’m a full-stack developer passionate about building tools for communities.
        </p>
        <a
          href="/projects"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          See My Work
        </a>
      </section>
    );
  }
  