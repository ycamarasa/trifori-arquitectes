import { useTranslation } from "react-i18next";
import { useMeta } from "../hooks/use-meta";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

export default function Projects() {
  const { t } = useTranslation();
  const projects = Object.entries(t("projects.items", { returnObjects: true }));
  useMeta(t("projects_meta_title"), t("projects_meta_description"));

  return (
    <div className="layout projects">
      <h1 className="projects__title">{t("projects_title")}</h1>
      <p className="projects__description">
        {t("projects_description") || "Cargando proyectos..."}
      </p>

      <section className="projects-grid">
        {projects.map(([id, project], index) => (
          <ProjectCard
            key={id}
            project={project}
            isFirst={index === 0} 
          />
        ))}
      </section>
    </div>
  );
}
