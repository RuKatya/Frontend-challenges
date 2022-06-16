import { useState } from "react";
import "../style/expenses-chart/index.scss";
import Context from "./Components/Context";
import Header from "./Components/Header";

const ExpensesIndex = () => {
  const [balance, setBalance] = useState(921.48);

  return (
    <div className="expenses-chart">
      <div className="expenses-chart__card">
        <Header balance={balance} />
        <Context balance={balance} />
      </div>
    </div>
  );
};

export default ExpensesIndex;
