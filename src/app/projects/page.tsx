import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import projects, { IProject } from "@/constants/projects";
import css from "./projectPage.module.scss";
import Title from "@/components/Title/Title";

const Projects = () => {
  return (
    <section className="container">
      <div className={css.project}>
        
        <Title>Projects</Title>
        <ul className={css.project_list}>
          {projects.map((project: IProject) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
