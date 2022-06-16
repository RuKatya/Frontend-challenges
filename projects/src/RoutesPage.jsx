import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App";
import Layout from "./Layout";
import OrderMain from "./order-summary/Page/OrderMain";
import AdviceMain from "./advice-generator/Page/AdviceMain";
import ExpensesIndex from "./expenses-chart/ExpensesIndex";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
