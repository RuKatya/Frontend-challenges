import { useState } from "react";
import { useEffect } from "react";

const Graph = ({ data }) => {
  const [day, setDay] = useState();
  const [activeDay, setActiveDay] = useState("hsl(186, 34%, 60%)");
  const [regularDay, setRegularDay] = useState("hsl(10, 79%, 65%)");
  const newDate = new Date();
  const todayDay = newDate.getDay();

  useEffect(() => {
    switch (todayDay) {
      case 0:
        setDay("sun");
        break;
      case 1:
        setDay("mon");
        break;
      case 2:
        setDay("tue");
        break;
      case 3:
        setDay("wed");
        break;
      case 4:
        setDay("thu");
        break;
      case 5:
        setDay("fri");
        break;
      case 6:
        setDay("sat");
        break;
      default:
        console.log("no day");
    }
  }, [todayDay]);

  return (
    <div
      className="expenses-chart__context--eachGraph"
      onMouseEnter={() => {
        day === data.day
          ? setActiveDay("hsl(186, 76%, 83%)")
          : setRegularDay("hsl(10, 90%, 80%)");
      }}
      onMouseLeave={() => {
        day === data.day
          ? setActiveDay("hsl(186, 34%, 60%)")
          : setRegularDay("hsl(10, 79%, 65%)");
      }}
    >
      <div className="expenses-chart__context--eachGraph__amount">
        ${data.amount}
      </div>
      <div
        className="expenses-chart__context--eachGraph__graph"
        style={{
          height: `${data.amount / 4.5}vh`,
          backgroundColor: day === data.day ? activeDay : regularDay,
        }}
      ></div>
      <div className="expenses-chart__context--eachGraph__dayText">
        {data.day}
      </div>
    </div>
  );
};

export default Graph;
