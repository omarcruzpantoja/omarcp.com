import { useState } from "react";
import type { JSX } from "react";

const Contact = (): JSX.Element => {
  const USER = "omarcrz0";
  const DOMAIN = "gmail";
  const TLD = "com";

  const [copied, setCopied] = useState(false);

  const email = `${USER}@${DOMAIN}.${TLD}`;

  const handleEmailClick = () => {
    // Build mailto at runtime to avoid exposing in HTML
    window.location.href = `mailto:${email}`;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card-bg/30">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <h3 className="text-3xl font-bold mb-6 text-terminal-green font-mono">
          contact --help
        </h3>

        {/* Contact block */}
        <div className="mx-auto max-w-2xl rounded-lg border border-border-gray bg-card-bg/60 p-4 md:p-6">
          {/* Obfuscated email line */}
          <p className="font-mono text-sm text-gray-300">
            Email:&nbsp;
            <span className="select-all">
              {USER} <span className="text-terminal-green">[at]</span> {DOMAIN}{" "}
              <span className="text-terminal-green">[dot]</span> {TLD}
            </span>
          </p>

          {/* Actions */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleEmailClick}
              className="w-full sm:w-auto bg-terminal-green text-black px-5 py-2 rounded font-semibold transition-all hover:shadow-lg hover:shadow-terminal-green/40 focus:outline-none focus:ring-2 focus:ring-terminal-green/60"
              aria-label="Open email client"
            >
              Email me
            </button>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto border border-terminal-green text-terminal-green px-5 py-2 rounded transition-colors hover:bg-terminal-green hover:text-black focus:outline-none focus:ring-2 focus:ring-terminal-green/40"
              aria-live="polite"
              aria-label="Copy email to clipboard"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>

            <a
              href="https://github.com/omarcruzpantoja"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-border-gray text-gray-200 px-5 py-2 rounded hover:border-terminal-green/60 hover:text-terminal-green transition-colors focus:outline-none focus:ring-2 focus:ring-terminal-green/30"
            >
              View GitHub
            </a>
          </div>
        </div>

        <p className="mt-6 text-gray-400 font-mono text-sm">
          Available for full-time opportunities
        </p>
      </div>
    </section>
  );
};

export default Contact;
