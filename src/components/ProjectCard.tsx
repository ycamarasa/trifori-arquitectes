import ProjectCarousel from "./ProjectCarousel";
import "../styles/projectCard.css";

type Project = {
  title: string;
  location: string;
  description: string;
  images: string[];
};

export default function ProjectCard({
  project,
  isFirst = false,
}: {
  project: Project;
  isFirst?: boolean;
}) {
  return (
    <article className="project-card">
      {project.images.length > 1 ? (
        <ProjectCarousel images={project.images} title={project.title} />
      ) : (
        <img
          src={project.images[0]}
          alt={project.title}
          width={500}
          height={420}
          style={{ aspectRatio: "16/9" }}
          {...(isFirst
            ? { fetchPriority: "high", loading: "eager" }
            : { loading: "lazy" })}
        />
      )}

      <div className="project-card__content">
        <div className="project-card__title">
          <h2>{project.title}</h2>
          &nbsp;<p>|</p>&nbsp;
          <p>{project.location}</p>
        </div>
        <p>{project.description}</p>
      </div>
    </article>
  );
}
