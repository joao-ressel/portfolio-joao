import { useState, useEffect } from "react";
import { FunnelSimple } from "@phosphor-icons/react";

import { ProjectCard } from "../ProjectCard";
import { projects } from "./Projects";

export const SectionsProjects = () => {
  const [sortBy, setSortBy] = useState(null);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filterProjects = () => {
    let sortedProjects = [...projects];

    if (sortBy === "date") {
      sortedProjects.sort((a, b) => {
        // Ordenar por data, assumindo que dateProject é uma string no formato MM/YYYY
        return new Date(b.dateProject) - new Date(a.dateProject);
      });
    } else if (sortBy === "importance") {
      sortedProjects.sort((a, b) => b.import - a.import);
    }

    return sortedProjects;
  };

  const handleOptionHover = (e) => {
    e.target.classList.add("hovered");
  };

  const handleOptionUnhover = (e) => {
    e.target.classList.remove("hovered");
  };

  useEffect(() => {
    const options = document.querySelectorAll(".filterButton select option");
    options.forEach((option) => {
      option.addEventListener("mouseover", handleOptionHover);
      option.addEventListener("mouseout", handleOptionUnhover);
    });

    return () => {
      options.forEach((option) => {
        option.removeEventListener("mouseover", handleOptionHover);
        option.removeEventListener("mouseout", handleOptionUnhover);
      });
    };
  }, []);

  const sortedProjects = filterProjects();
  return (
    <section className="projects">
      <div className="titleAndButton">
        <h2>Projects</h2>

        <div className="filterButton">
          <label htmlFor="sortBy">
            <FunnelSimple size={24} weight="bold" /> Filter by...
          </label>
          <select id="sortBy" value={sortBy} onChange={handleSortChange}>
            <option value="">Filter by...</option>
            <option value="date">Most Recent</option>
            <option value="importance">The Biggest</option>
          </select>
        </div>
      </div>
      <div className="projectContainer">
        {sortedProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard
              tags={project.tags}
              name={project.name}
              description={project.description}
              id={project.id}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
