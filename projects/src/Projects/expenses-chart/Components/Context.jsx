// import data from "../data.json";
import Graph from "./Graph";

const Context = ({ data, totalSpend }) => {
  return (
    <div className="expenses-chart__context">
      <h2 className="expenses-chart__context--header">
        Spending - Last 7 Days
      </h2>
      <div className="expenses-chart__context--graphs">
        {data.map((d, index) => {
          return <Graph data={d} key={index} />;
        })}
      </div>
      <div className="expenses-chart__context--total">
        <p className="expenses-chart__context--total__text totalMonth">
          Total this month
        </p>
        <h2 className="amountTotal">${totalSpend}</h2>
        <h4 className="percentTotal">+2.4%</h4>
        <p className="expenses-chart__context--total__text lastMonth">
          from last month
        </p>
      </div>
    </div>
  );
};

export default Context;
