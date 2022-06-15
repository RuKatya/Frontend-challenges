import { Link } from "react-router-dom";

function App() {
  return (
    <div className="mainPage">
      <div className="mainPage__header">
        <h1>Frontend mentor</h1>
        <h2>Challenges</h2>
      </div>
      <div className="mainPage__descriptoin">
        <h2>Welcome!</h2>
        <p>
          These projects are taken as a challenge from the{" "}
          <a href="https://www.frontendmentor.io/challenges">Fronted Mentor</a>{" "}
          website. In each of them, I learned something new that I had not
          encountered before or improved the knowledge that I already had.{" "}
          <a href="https://www.frontendmentor.io/challenges">Fronted Mentor</a>{" "}
          challenges help improve coding skills by building realistic projects.
        </p>
      </div>

      <div>
        <Link to="/order-summary">Order</Link>
      </div>
    </div>
  );
}

export default App;
