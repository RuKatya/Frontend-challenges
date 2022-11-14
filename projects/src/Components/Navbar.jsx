import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ screenWidth }) => {
  const paths = [
    { link: "rock-paper-scissors", title: "Rock Paper Scissors" },
    { link: "advice-generator", title: "Advice Generator App" },
    { link: "expenses-chart", title: "Expenses Chart" },
    { link: "intective-rating", title: "Interactive Rating Component" },
    { link: "order-summary", title: "Order Summary" },
    // { link: "to-do-app", title: "Todo App" },
    // { link: "timer", title: "Count Down Timer" },
  ];

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
          {paths.map((path, index) => {
            return (
              <Link to={`/${path.link}`} onClick={toggleNav} key={index}>
                {path.title}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
