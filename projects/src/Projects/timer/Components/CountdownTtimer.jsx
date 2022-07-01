import React from "react";
import { useEffect, useState } from "react";

const CountdownTtimer = ({ day = 0, hours = 0, minutes = 0, seconds = 0 }) => {
  const [[d, h, m, s], setTime] = useState([day, hours, minutes, seconds]);

  console.log(d, h, m, s);

  const tick = () => {
    if (d === 0 && h === 0 && m === 0 && s === 0) {
      console.log(`hi`);
    } else if (h === 0 && m === 0 && s === 0) {
      setTime([d - 1, 23, 59, 59]);
    } else if (m === 0 && s === 0) {
      setTime([d, h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([d, h, m - 1, 59]);
    } else {
      setTime([d, h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p>
        {d.toString().padStart(2, "0")}:{h.toString().padStart(2, "0")}:
        {m.toString().padStart(2, "0")}:{s.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default CountdownTtimer;
