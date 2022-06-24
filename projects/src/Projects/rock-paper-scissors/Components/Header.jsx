import React from "react";
import { useEffect, useState } from "react";

const Header = ({ showWhoWin, win }) => {
  const logo = { src: "/images/rock-paper-scissors/logo.svg" };
  let [score, setScore] = useState(0);

  useEffect(() => {
    if (showWhoWin === true) {
      if (win === "YOU LOSE") {
        setScore(--score);
      } else if (win === "YOU WIN") {
        setScore(++score);
      }
      console.log(score);
    }
  }, [showWhoWin]);

  return (
    <div className="rock-paper-scissors__header">
      <div className="rock-paper-scissors__header--context">
        <img src={logo.src} alt="logo" />
        <div className="rock-paper-scissors__header--score">
          <h3>SCORE</h3>
          <h1>{score}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
