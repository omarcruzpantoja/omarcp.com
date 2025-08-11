import type { JSX } from "react";

type ProjectDescriptionProps = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  externalLink?: string;
  status?: string;
};

const ProjectDescription = ({
  title,
  description,
  technologies,
  githubLink,
  externalLink,
  status,
}: ProjectDescriptionProps): JSX.Element => {
  return (
    <article className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
      <div className="h-full bg-card-bg p-6 rounded-lg border border-border-gray hover:border-terminal-green/50 transition-all hover:-translate-y-2 group flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 mb-4">
            <h4 className="text-xl font-semibold text-white group-hover:text-terminal-green transition-colors">
              {title}
            </h4>
            {status && (
              <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded border border-yellow-500/40">
                {status}
              </span>
            )}
          </div>
          <div className="flex space-x-2">
            <a
              href={githubLink}
              className="text-gray-400 hover:text-terminal-green transition-colors"
              aria-label="GitHub"
              target="_blank"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
              </svg>
            </a>
            {externalLink && (
              <a
                href={externalLink}
                className="text-gray-400 hover:text-terminal-green transition-colors"
                aria-label="External link"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-dark-bg px-2 py-1 rounded text-xs text-terminal-green"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto fade-in">
        <h3 className="text-3xl font-bold mb-8 text-terminal-green font-mono">
          $ ls projects/
        </h3>
        <div className="flex flex-wrap -mx-3">
          <ProjectDescription
            title="Artincam"
            description="Artincam is a Raspberry Pi camera project designed to automate the capture of images and videos using the Raspberry Pi Camera Module, powered by the picamera2 library."
            technologies={["Python", "picamera2", "Raspberry Pi"]}
            githubLink="https://github.com/omarcruzpantoja/artincam"
          />

          <ProjectDescription
            title="Mist Project"
            status="In Development"
            description={`Mist is a self-hosted, modular platform for real-time communication 
and collaboration, designed to connect people and teams through fast, reliable, 
and scalable services.`}
            technologies={[
              "Go",
              "Python",
              "Docker",
              "React",
              "Electron",
              "Redis",
              "PostgreSQL",
              "Nginx",
            ]}
            githubLink="https://github.com/mist-project"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
