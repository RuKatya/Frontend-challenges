import data from "../data.json";
import Graph from "./Graph";

const Context = () => {
  return (
    <div className="expenses-chart__context">
      <h3>Spending - Last 7 Days</h3>
      <div className="expenses-chart__context--graphs">
        {data.map((d, index) => {
          return <Graph data={d} key={index} />;
        })}
      </div>
      {/* <div>
        <p>Total this month</p>
        <h3>456</h3>
        <h4>+2.4%</h4>
        <p>from last month</p>
      </div> */}
    </div>
  );
};

export default Context;
