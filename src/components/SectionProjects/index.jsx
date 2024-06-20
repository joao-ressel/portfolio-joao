import { ProjectCard } from "../ProjectCard";
import { FunnelSimple } from "@phosphor-icons/react";
import { projects } from "./Projects";
export const SectionsProjects = () => {
  return (
    <section className="projects">
      <div className="titleAndButton">
        <h2>Projects</h2>
        <button className="filterButton">
          <FunnelSimple size={24} weight="bold" /> Filter by...
        </button>
      </div>
      <div className="projectContainer">
        {projects.map((project) => (
          <>
            <div key={project.id}>
              <ProjectCard
                tags={project.tags}
                name={project.name}
                description={project.description}
                id={project.id}
                link={project.link}
              />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
