import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = ({ screenWidth }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <nav>
        <div onClick={toggleNav} className="menuBtn">
          Menu
        </div>

        {(toggleMenu || screenWidth > 750) && (
          <div className="menuLinks">
            <div onClick={toggleNav} class="closeMenuBtb">
              X
            </div>
            <Link to="/" onClick={toggleNav}>
              Home
            </Link>
            <Link to="/order-summary" onClick={toggleNav}>
              Order Summary
            </Link>
            <Link to="/advice-generator" onClick={toggleNav}>
              Advice Generator App
            </Link>
          </div>
        )}
      </nav>

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
