import type { JSX } from "react";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border-gray">
      <div className="max-w-6xl mx-auto text-center text-gray-400 font-mono text-sm">
        <div className="mt-2">
          © {year} Omar Cruz Pantoja. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
