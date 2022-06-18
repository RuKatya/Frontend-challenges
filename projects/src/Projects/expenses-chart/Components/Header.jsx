const Header = ({ balance }) => {
  return (
    <div className="expenses-chart__header">
      <p>My balance</p>
      <h2>${balance}</h2>
      <div>
        <img src="/images/expenses-chart/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
