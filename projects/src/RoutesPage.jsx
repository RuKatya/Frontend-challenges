import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import OrderMain from "./order-summary/Page/OrderMain";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="order-summary" element={<OrderMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
