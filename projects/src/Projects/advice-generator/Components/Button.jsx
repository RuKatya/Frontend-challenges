import React from "react";

const Button = ({ shfleBtn }) => {
  return (
    <button onClick={shfleBtn}>
      <img src="/images/advice-generator/icon-dice.svg" alt="btn" />
    </button>
  );
};

export default Button;
