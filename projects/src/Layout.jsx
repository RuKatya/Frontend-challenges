import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Layout = ({ screenWidth }) => {
  return (
    <div>
      <Navbar screenWidth={screenWidth} />
      <main>
        <Outlet />
      </main>

      <footer>
        Created by{" "}
        <a href="https://www.linkedin.com/in/katya-rukosuev/">Katya Ru</a>
      </footer>
    </div>
  );
};

export default Layout;
