import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        <ProjectItem name={projects[0].name} about={projects[0].about} />
        <ProjectItem name={projects[1].name} about={projects[1].about} />
        <ProjectItem name={projects[2].name} about={projects[2].about} />
      </div>
    </div>
  );
}

export default ProjectList;
