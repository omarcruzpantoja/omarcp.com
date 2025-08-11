import type { JSX } from "react";

import "./Home.scss";
import WhoAmI from "./WhoAmI";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = (): JSX.Element => {
  return (
    <>
      <WhoAmI />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export { Home };
