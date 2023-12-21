import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import projects, { IProject } from "@/constants/projects";

const Projects = () => {
  return (
    <div>
      <h1 className="title">Projects</h1>
      <ul className="gap-4">
        {projects.map((project: IProject) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
