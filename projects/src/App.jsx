import ProjectCard from "./Components/ProjectCard";

function App({ screenWidth }) {
  const projcts = [
    {
      name: "Order Summary",
      desc: "The challenge is to build out this order summary card component. This project is my first experiment with a similar task. I tried to create a component as close as possible to the design.",
      used: ["React", "SCSS"],
      link: "/order-summary",
      github:
        "https://github.com/RuKatya/Frontend-challenges/tree/main/projects/src/order-summary",
      img: "1",
      challenge:
        "https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj",
    },
    {
      name: "Advice Generator App",
      desc: "The challenge is to build out this advice generator app using the Advice Slip API .In this project, I practiced requesting data from the API and displaying it on the page.",
      used: ["React", "SCSS", "API"],
      link: "/advice-generator",
      github:
        "https://github.com/RuKatya/Frontend-challenges/tree/main/projects/src/advice-generator",
      img: "2",
      challenge:
        "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
    },
    {
      name: "Expenses chart component",
      desc: "The challenge is to build out this bar chart component. In the project I used a data.json file which include amount and day data.",
      used: ["React", "SCSS", "JSON"],
      link: "/expenses-chart",
      github:
        "https://github.com/RuKatya/Frontend-challenges/tree/main/projects/src/expenses-chart",
      img: "3",
      challenge:
        "https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt",
    },
    // { name: "", desc: "", used: ["", ""], url: "", github: "" },
    // { name: "", desc: "", used: ["", ""], url: "", github: "" },
  ];

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

      <div className="projects">
        {projcts.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              key={index}
              screenWidth={screenWidth}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
