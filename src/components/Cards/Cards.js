import React from "react";
import "./Cards.css";
import Card from "../Card/Card";
import { projects } from "../../data";

function Cards() {
  console.log(projects.length);
  return (
    <div className="cards">
      {projects.length !== 0 &&
        projects?.map((project) => (
          <Card
            image={project.image}
            languages={project.languages}
            title={project.title}
            githubUrl={project.githubUrl}
            demo={project.demo}
          />
        ))}
      <Card />
    </div>
  );
}

export default Cards;
