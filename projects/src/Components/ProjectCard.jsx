import { Link } from "react-router-dom";

const ProjectCard = ({ project, screenWidth }) => {
  return (
    <div className="card">
      <h2>{project.name}</h2>
      <ul>
        {project.used.map((used, index) => {
          return <li key={index}>{used}</li>;
        })}
      </ul>
      <Link to={`${project.link}`}>
        <img
          src={
            screenWidth < 750
              ? `/images/main/${project.img}/${project.img}__mobile.jpg`
              : `/images/main/${project.img}/${project.img}__desk.jpg`
          }
          alt={project.name}
        />
      </Link>
      <p>{project.desc}</p>
      <a
        href={`${project.github}`}
        target="_blank"
        rel="noreferrer"
        className="card__gitHubBtn"
      >
        Github
      </a>
      <a href={project.challenge} target="_blank" rel="noreferrer">
        The challenge
      </a>
    </div>
  );
};

export default ProjectCard;
