import { useState } from "react";
import "../style/expenses-chart/index.scss";
import Context from "./Components/Context";
import Header from "./Components/Header";
import data from "./data.json";

const ExpensesIndex = () => {
  const [balance, setBalance] = useState(921.48);

  const amounts = data.map((d) => {
    return d.amount;
  });

  const allAmount = amounts.reduce((acc, cur) => {
    return acc + cur;
  });

  const totalSpend = 200 + allAmount;

  return (
    <div className="expenses-chart">
      <div className="expenses-chart__card">
        <Header balance={balance} />
        <Context balance={balance} data={data} totalSpend={totalSpend} />
      </div>
    </div>
  );
};

export default ExpensesIndex;
