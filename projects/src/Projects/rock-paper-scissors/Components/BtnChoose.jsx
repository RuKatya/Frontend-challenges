const BtnChoose = ({ setChosenUserSymbol, optiongToChoose }) => {
  const triangle = { src: "/images/rock-paper-scissors/bg-triangle.svg" };
  return (
    <div className="btnsChoose">
      <img src={triangle.src} alt="triangle" className="btnsChoose--triangle" />
      {optiongToChoose.map((option, index) => {
        return (
          <button
            key={index}
            className={`btnOneChoose ${option.name} btnsChoose--${option.name}`}
          >
            <div>
              <img src={option.img} alt={option.name} />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default BtnChoose;
