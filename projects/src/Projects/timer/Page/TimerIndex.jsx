import React, { useState } from "react";
import "../../../style/timer/index.scss";
import Backgrounds from "../Components/Backgrounds";
import CountdownTtimer from "../Components/CountdownTtimer";

const TimerIndex = () => {
  const currentTime = new Date();
  const newDate = new Date().setDate(currentTime.getDate() + 14);
  const futureDate = new Date(newDate);
  //   const futureDate = new Date("2022-07-03");

  const [timerLeft, setTimerLeft] = useState(futureDate - currentTime);

  const days = Math.floor(timerLeft / 1000 / 60 / 60 / 24);
  const hours = Math.floor(timerLeft / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(timerLeft / 1000 / 60) % 60;
  const seconds = Math.floor(timerLeft / 1000) % 60;

  return (
    <div className="timer">
      <Backgrounds />
      <div>
        <h2 className="timer__header">We're launching soon</h2>
        <CountdownTtimer
          day={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </div>
  );
};

export default TimerIndex;
