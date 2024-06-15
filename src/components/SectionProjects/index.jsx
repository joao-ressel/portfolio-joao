import { ProjectCard } from "../ProjectCard";
import "./styles.sass";

export const SectionsProjects = () => {
  return (
    <section className="projects">
      <div className="titleAndButton">
        <h2>Projects</h2>
        <button className="filterButton">Filter by...</button>
      </div>
      <div className="projectContainer">
        <ProjectCard
          tags={[
            { id: 1, name: "React" },
            { id: 2, name: "JavaScript" },
            { id: 3, name: "Web Development" },
          ]}
          name="Easy Lab"
          description="Title Description Project"
        />
        <ProjectCard
          tags={[
            { id: 1, name: "React" },
            { id: 2, name: "JavaScript" },
            { id: 3, name: "Web Development" },
          ]}
          name="Easy Lab"
          description="Title Description Project"
        />
        <ProjectCard
          tags={[
            { id: 1, name: "React" },
            { id: 2, name: "JavaScript" },
            { id: 3, name: "Web Development" },
          ]}
          name="Easy Lab"
          description="Title Description Project"
        />
      </div>
    </section>
  );
};
