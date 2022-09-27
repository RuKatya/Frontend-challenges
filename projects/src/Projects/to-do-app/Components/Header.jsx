import React from "react";

const Header = ({ theme, setTheme }) => {
  return (
    <div className="to-do-card__header">
      <h1>TODO</h1>
      <img
        src={
          theme === "dark"
            ? `/images/todoApp/icons/sun.svg`
            : `/images/todoApp/icons/moon.svg`
        }
        alt="change icon theme"
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      />
    </div>
  );
};

export default Header;
