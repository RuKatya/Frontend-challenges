import { useEffect, useState } from "react";

const WhoWon = ({
  imgUserChosen,
  win,
  imgComputerChosen,
  chosenUserSymbol,
  chosenComputerSymbol,
  setShowWhoWin,
  showWhoWin,
  setChosenUserSymbol,
  setRandomNum,
}) => {
  const [showComputerChose, setShowComputerChose] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComputerChose(true);
    }, 1000);

    setTimeout(() => {
      setShowWhoWin(true);
    }, 1500);
  }, [chosenUserSymbol, win]);

  return (
    <div className="whoWon">
      <div className="whoWon__picked">
        {/* CLIENT CHOSE */}
        <h2>You picked</h2>
        {chosenUserSymbol ? (
          <>
            <div
              className={`btnOneChoose btnsChoose--${chosenUserSymbol} user`}
              style={{
                boxShadow:
                  win === "YOU WIN" && showWhoWin === true
                    ? "0px 0px 90px rgba(255, 255, 255, 0.54)"
                    : "none",
              }}
            >
              <div>
                <img src={imgUserChosen} alt="" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="whoWon__noChoose"></div>
          </>
        )}
      </div>

      {/* WHO WIN WINDOW */}

      {showWhoWin ? (
        <>
          <div className="whoWon__window">
            <div>{win}</div>
            <button
              onClick={() => {
                setChosenUserSymbol("");
                setRandomNum(Math.round(Math.random() * 2));
                setShowComputerChose(false);
                setShowWhoWin(false);
              }}
            >
              Play again
            </button>
          </div>
        </>
      ) : (
        <></>
      )}

      {/* COMPUTER CHOSE */}
      <div className="whoWon__picked">
        <h2>The house picked</h2>
        {chosenComputerSymbol ? (
          <>
            {showComputerChose ? (
              <>
                <div
                  className={`btnOneChoose btnsChoose--${chosenComputerSymbol} computer`}
                  style={{
                    boxShadow:
                      win === "YOU LOSE" && showWhoWin === true
                        ? "0px 0px 90px rgba(255, 255, 255, 0.54)"
                        : "null",
                  }}
                >
                  <div>
                    <img src={imgComputerChosen} alt="" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="whoWon__noChoose"></div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="whoWon__noChoose"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default WhoWon;
