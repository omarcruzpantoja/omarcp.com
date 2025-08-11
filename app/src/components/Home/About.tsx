import type { JSX } from "react";

const TechStackItem = ({ technology }: { technology: string }): JSX.Element => {
  return (
    <div className="m-1 flex-1 min-w-[45%] bg-dark-bg p-3 rounded border border-border-gray">
      {technology}
    </div>
  );
};

const About = (): JSX.Element => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto fade-in">
        <h3 className="text-3xl font-bold mb-8 text-terminal-green font-mono">
          $ cat about.txt
        </h3>
        <div className="bg-card-bg p-8 rounded-lg border border-border-gray">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="basis-full md:basis-1/2">
              <p className="text-gray-300 leading-relaxed mb-6">
                I’m a backend-focused engineer passionate about building clean,
                efficient, and scalable systems. My work centers on designing
                APIs, improving database performance, and architecting services
                that handle high traffic while maintaining reliability. I
                primarily work with Go and Python, applying strong fundamentals
                in service design and data modeling to deliver maintainable and
                performant applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outside of my core development work, I also have experience with
                infrastructure tooling like Docker, Terraform, and Ansible,
                which I use for personal projects and experimentation to explore
                how backend systems run in production environments.
              </p>
            </div>
            <div className="basis-full md:basis-1/2">
              <h4 className="text-terminal-blue font-semibold mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap -m-1">
                {/* make the following use a component */}
                <TechStackItem technology="Python/Django/FastAPI" />
                <TechStackItem technology="Go" />
                <TechStackItem technology="PostgreSQL" />
                <TechStackItem technology="Docker" />
                <TechStackItem technology="TypeScript/React" />
                <TechStackItem technology="Github/GithubActions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
