import React from "react";

const Rules = ({ setOpenRules }) => {
  const images = [
    { name: "rules", src: "/images/rock-paper-scissors/image-rules.svg" },
    { name: "close", src: "/images/rock-paper-scissors/icon-close.svg" },
  ];

  return (
    <div className="rules">
      <div className="rules__context">
        <div className="rules__context--header">
          <h2>RULES</h2>
          <button
            className="rules__context--header__closeBtn"
            onClick={() => {
              setOpenRules(false);
            }}
          >
            <img src={images[1].src} alt={images[1].name} />
          </button>
        </div>
        <img src={images[0].src} alt={images[0].name} />
      </div>
    </div>
  );
};

export default Rules;
