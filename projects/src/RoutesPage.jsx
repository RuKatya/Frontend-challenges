import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App";
import Layout from "./Layout";
import OrderMain from "./order-summary/Page/OrderMain";
import AdviceMain from "./advice-generator/Page/AdviceMain";
import ExpensesIndex from "./expenses-chart/ExpensesIndex";
import IntectivcePage from "./intective-rating/Page/IntectivcePage";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
