import type { JSX } from "react";

const WhoAmI = (): JSX.Element => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-mono text-terminal-green mb-4">$ whoami</div>
        <h1 className="text-5xl md:text-\6xl font-bold mb-6 whoami-terminal-cursor">
          Omar Cruz Pantoja
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-8">
          Backend Developer
        </h2>
        <div className="font-mono text-gray-500 text-sm mb-8">
          <div>
            Specializing in scalable systems, APIs, and database architecture
          </div>
          <div className="mt-2">Python | Go | PostgreSQL | Docker</div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <a
            href="#contact"
            className="bg-terminal-green text-black px-8 py-3 rounded hover:shadow-lg hover:shadow-terminal-green/50 transition-all font-semibold"
          >
            Get In Touch
          </a>
          <a
            href="#about"
            className="border border-terminal-green text-terminal-green px-8 py-3 rounded hover:bg-terminal-green hover:text-black transition-all"
          >
            About
          </a>
          <a
            href="https://raw.githubusercontent.com/omarcruzpantoja/omarcruzpantoja.github.io/refs/heads/master/omar_LATEST_Resume.pdf"
            download
            className="border border-terminal-green text-terminal-green px-8 py-3 rounded hover:bg-terminal-green hover:text-black transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
