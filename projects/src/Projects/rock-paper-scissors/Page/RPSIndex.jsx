import { useEffect, useState } from "react";
import "../../../style/rock-paper-scissors/index.scss";
import BtnChoose from "../Components/BtnChoose";
import Header from "../Components/Header";
import Rules from "../Components/Rules";
import WhoWon from "../Components/WhoWon";

const RPSIndex = () => {
  const optiongToChoose = [
    { name: "Rock", img: "/images/rock-paper-scissors/icon-rock.svg" },
    { name: "Paper", img: "/images/rock-paper-scissors/icon-paper.svg" },
    { name: "Scissors", img: "/images/rock-paper-scissors/icon-scissors.svg" },
  ];
  const [chosenUserSymbol, setChosenUserSymbol] = useState("");
  const [imgUserChosen, setUserImgChosen] = useState();
  const [win, setWin] = useState();
  const [randomNum, setRandomNum] = useState(Math.round(Math.random() * 2));

  const [openRules, setOpenRules] = useState(false);
  const [showWhoWin, setShowWhoWin] = useState(false);
  const computer = optiongToChoose[randomNum];
  const chosenComputerSymbol = computer.name;
  const imgComputerChosen = computer.img;

  useEffect(() => {
    const btn = document.querySelectorAll(".btnOneChoose");

    btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("Rock")) {
          setChosenUserSymbol(optiongToChoose[0].name);
          setUserImgChosen(optiongToChoose[0].img);
        } else if (btn.classList.contains("Paper")) {
          setChosenUserSymbol(optiongToChoose[1].name);
          setUserImgChosen(optiongToChoose[1].img);
        } else if (btn.classList.contains("Scissors")) {
          setChosenUserSymbol(optiongToChoose[2].name);
          setUserImgChosen(optiongToChoose[2].img);
        }
      });
    });

    setTimeout(() => {
      if (chosenUserSymbol === chosenComputerSymbol) {
        setWin(`NO ONE`);
      } else if (
        (chosenUserSymbol === "Rock" && chosenComputerSymbol === "Paper") ||
        (chosenUserSymbol === "Paper" && chosenComputerSymbol === "Scissors") ||
        (chosenUserSymbol === "Scissors" && chosenComputerSymbol === "Rock")
      ) {
        setWin(`YOU LOSE`);
      } else if (
        (chosenUserSymbol === "Paper" && chosenComputerSymbol === "Rock") ||
        (chosenUserSymbol === "Rock" && chosenComputerSymbol === "Scissors") ||
        (chosenUserSymbol === "Scissors" && chosenComputerSymbol === "Paper")
      ) {
        setWin(`YOU WIN`);
      }
    }, 500);
  }, [chosenUserSymbol]);

  return (
    <div className="rock-paper-scissors">
      <Header showWhoWin={showWhoWin} win={win} />
      {chosenUserSymbol ? (
        <>
          <WhoWon
            imgUserChosen={imgUserChosen}
            win={win}
            imgComputerChosen={imgComputerChosen}
            chosenUserSymbol={chosenUserSymbol}
            chosenComputerSymbol={chosenComputerSymbol}
            showWhoWin={showWhoWin}
            setShowWhoWin={setShowWhoWin}
            setChosenUserSymbol={setChosenUserSymbol}
            setRandomNum={setRandomNum}
          />
        </>
      ) : (
        <>
          <BtnChoose
            setChosenUserSymbol={setChosenUserSymbol}
            optiongToChoose={optiongToChoose}
          />
        </>
      )}

      {openRules ? (
        <>
          <Rules setOpenRules={setOpenRules} />
        </>
      ) : (
        <div
          onClick={() => {
            setOpenRules(true);
          }}
          className="rulesOpenBtn"
        >
          Rules
        </div>
      )}
    </div>
  );
};

export default RPSIndex;
