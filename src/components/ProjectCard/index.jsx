
export const ProjectCard = ({ name, description, link, tags, id, dateProject, important }) => {
  return (
    <div className="projectCard" id={id}>
      <div className="hover">
      <div className="tags">
        {tags.map((tag) => (
          <div className="tag" key={tag.id}>{tag.name}</div>
        ))}
      </div>
      <div className="titleDescription">
        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
      </div>
      <a href={link} className="viewMore">
        View More
      </a>
      </div>
    </div>
  );
};
