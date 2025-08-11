import type { JSX } from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: JSX.Element | string;
}) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-terminal-green transition-colors"
    >
      {children}
    </a>
  );
};

const Nav = (): JSX.Element => {
  return (
    <nav className="fixed top-0 w-full bg-dark-bg/90 backdrop-blur-sm border-b border-border-gray z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-terminal-green font-mono text-xl">
            ~/portfolio
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">about</NavLink>
            <NavLink href="#experience">experience</NavLink>
            <NavLink href="#projects">projects</NavLink>
            <NavLink href="#contact">contact</NavLink>
          </div>
          <button
            className="md:hidden text-terminal-green"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
