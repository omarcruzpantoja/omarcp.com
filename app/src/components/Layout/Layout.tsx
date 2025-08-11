import { Outlet } from "react-router";
import { Nav } from "../Nav";
import { Footer } from "../Footer";

const Layout = () => {
  return (
    <body className="bg-dark-bg text-gray-100 font-sans">
      <Nav />
      <Outlet />
      <Footer />
    </body>
  );
};

export default Layout;
