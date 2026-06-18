import { ProjectCard } from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section>
      <SectionHeading title="Selected Projects" />
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
}
