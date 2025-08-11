import type { JSX } from "react";

import "./Home.scss";
import WhoAmI from "./WhoAmI";
import About from "./About";

const Home = (): JSX.Element => {
  return (
    <>
      <WhoAmI />
      <About />
    </>
  );
};

export { Home };
