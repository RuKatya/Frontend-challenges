import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ screenWidth }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      <div onClick={toggleNav} className="menuBtn">
        Menu
      </div>

      {(toggleMenu || screenWidth > 750) && (
        <div className="menuLinks">
          <div onClick={toggleNav} className="closeMenuBtb">
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
          <Link to="/expenses-chart" onClick={toggleNav}>
            Expenses Chart
          </Link>
          <Link to="/intective-rating" onClick={toggleNav}>
            Interactive Rating Component
          </Link>
          <Link to="/rock-paper-scissors" onClick={toggleNav}>
            Rock Paper Scissors
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
