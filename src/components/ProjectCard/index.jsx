
export const ProjectCard = ({ name, description, link, tags }) => {
  return (
    <div className="projectCard">
      <div className="hover">
      <div className="tags">
        {tags.map((tag) => (
          <div className="tag" key={tag.id}>{tag.name}</div>
        ))}
      </div>
      <div className="titleDescription">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <a href={link} className="viewMore">
        View More
      </a>
      </div>
    </div>
  );
};
