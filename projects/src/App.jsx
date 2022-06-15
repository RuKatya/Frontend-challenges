import { useState, useEffect } from "react";
import ProjectCard from "./Components/ProjectCard";

function App() {
  const projcts = [
    {
      name: "Order Summary",
      desc: "A solution to the Order summary card challenge. This project is my first experiment with a similar task. I tried to create a component as close as possible to the design",
      used: ["React", "SCSS"],
      link: "/order-summary",
      url: "2",
      github: "3",
      img: "1",
    },
    {
      name: "Advice Generator App",
      desc: "A solution to the Advice generator app challenge on Frontend Mentor.In this project, I practiced requesting data from the API and displaying it on the page.",
      used: ["React", "SCSS", "API"],
      link: "/advice-generator",
      url: "1",
      github: "3",
      img: "2",
    },
    // { name: "", desc: "", used: ["", ""], url: "", github: "" },
    // { name: "", desc: "", used: ["", ""], url: "", github: "" },
    // { name: "", desc: "", used: ["", ""], url: "", github: "" },
  ];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

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
