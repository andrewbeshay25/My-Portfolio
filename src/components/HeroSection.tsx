export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-background text-text gap-8">
      <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4">
        Andrew Beshay – Empowering Tech for Good
      </h1>
      <h1 className="text-4xl text-red-500">Hello</h1>

      <p className="text-xl max-w-xl mb-6">
        I'm a full-stack developer passionate about building tools for communities.
      </p>
      <a
        href="/projects"
        className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-accent transition-all duration-200 text-lg"
      >
        See My Work
      </a>
    </section>
  );
}
