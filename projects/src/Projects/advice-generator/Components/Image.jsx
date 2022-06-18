import React from "react";

const Image = ({ screenWidth }) => {
  return (
    <div>
      <img
        src={
          screenWidth < 750
            ? `/images/advice-generator/pattern-divider-mobile.svg`
            : `/images/advice-generator/pattern-divider-desktop.svg`
        }
        alt="advice"
      />
    </div>
  );
};

export default Image;
