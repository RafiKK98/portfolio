import { Icon } from "@iconify/react";
import type { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-base-100 border border-base-300 hover:border-base-content/30 transition-colors card">
      <div className="p-6 card-body">
        <h3 className="text-lg card-title">{project.title}</h3>
        <p className="mt-2 mb-4 text-sm text-base-content/80 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge badge-neutral badge-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="justify-start mt-auto card-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="gap-1 btn btn-sm btn-ghost"
            >
              <Icon icon="line-md:github" fontSize={18} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="gap-1 btn btn-sm btn-ghost"
            >
              <Icon icon="line-md:external-link" fontSize={18} /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
