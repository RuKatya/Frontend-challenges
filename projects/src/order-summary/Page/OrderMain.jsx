import "../../style/order-summary/index.scss";
import Plan from "../Components/Plan";

const OrderMain = () => {
  return (
    <div className="order-summary">
      <div className="order-summary__card">
        <img src="/images/order-summary/illustration-hero.svg" alt="" />
        <div className="order-summary__card--info">
          <h2>Order Summary</h2>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <Plan />
        <button>Proceed to Payment</button>
        <a href="/order-summary" className="order-summary__card--cancelBtn">
          Cancel Order
        </a>
      </div>
    </div>
  );
};

export default OrderMain;
