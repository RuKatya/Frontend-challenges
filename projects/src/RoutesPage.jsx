import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App";
import Layout from "./Layout";
import OrderMain from "./Projects/order-summary/Page/OrderMain";
import AdviceMain from "./Projects/advice-generator/Page/AdviceMain";
import ExpensesIndex from "./Projects/expenses-chart/Page/ExpensesIndex";
import IntectivcePage from "./Projects/intective-rating/Page/IntectivcePage";
import RPSIndex from "./Projects/rock-paper-scissors/Page/RPSIndex";

const RoutesPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout screenWidth={screenWidth} />}>
          <Route index element={<App screenWidth={screenWidth} />} />
          <Route path="order-summary" element={<OrderMain />} />
          <Route path="advice-generator" element={<AdviceMain />} />
          <Route path="expenses-chart" element={<ExpensesIndex />} />
          <Route path="intective-rating" element={<IntectivcePage />} />
          <Route path="rock-paper-scissors" element={<RPSIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
