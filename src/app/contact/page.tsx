export default function ContactPage() {
    return (
      <main className="max-w-2xl mx-auto px-6 py-12 text-[color:var(--color-text)]">
        <h1 className="text-4xl font-bold text-[color:var(--color-primary)] mb-4">
          Let’s Build Something Together
        </h1>
        <p className="mb-8 text-sm">
          If you have a question, a project idea, or just want to connect — I’d love to hear from you.
        </p>
  
        <form className="space-y-6">
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
  
        <div className="mt-10 text-sm text-center">
          <p>
            Or find me on{" "}
            <a href="https://github.com/andrewbeshay25" className="underline hover:opacity-80" target="_blank">
              GitHub
            </a>{" "}
            or{" "}
            <a href="https://linkedin.com/in/andrew-beshay1" className="underline hover:opacity-80" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
      </main>
    );
  }
  