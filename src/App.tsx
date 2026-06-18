import { motion } from "framer-motion";
import { GitFork, Mail, MapPin } from "lucide-react";
import { Fragment } from "react";
import Container from "./components/Container";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { ProjectCard } from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import ThemeToggle from "./components/ThemeToggle";
import { achievements, education } from "./data/education";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Fragment>
      <div className="py-12 md:py-24 min-h-screen">
        <Container className="flex justify-end mb-8">
          <ThemeToggle />
        </Container>

        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-24"
          >
            {/* HERO */}
            <section className="space-y-6">
              <h1 className="font-bold text-4xl md:text-5xl tracking-tight">
                {profile.name}
              </h1>
              <p className="font-medium text-base-content/80 text-xl">
                {profile.role}
              </p>
              <p className="max-w-2xl text-base text-base-content/80 leading-relaxed">
                {profile.summary}
              </p>

              <div className="flex flex-wrap gap-4 pt-4 font-medium text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail size={16} /> Email
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <GitFork size={16} /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <span className="flex items-center gap-2 text-base-content/60">
                  <MapPin size={16} /> {profile.location}
                </span>
              </div>
            </section>

            {/* SKILLS */}
            <section>
              <SectionHeading title="Technical Skills" />
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                {skills.map((category) => (
                  <div key={category.title}>
                    <h3 className="mb-3 font-medium text-sm text-base-content/60 uppercase tracking-wider">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-base-200 px-3 py-1 rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
            <section>
              <SectionHeading title="Experience" />
              <ExperienceTimeline />
            </section>

            {/* PROJECTS */}
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

            {/* EDUCATION & ACHIEVEMENTS */}
            <section className="gap-12 grid grid-cols-1 md:grid-cols-2">
              <div>
                <SectionHeading title="Education" />
                {education.map((edu, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="font-medium text-lg">{edu.degree}</h3>
                    <p className="text-base-content/80">{edu.institution}</p>
                    <div className="flex justify-between mt-1 text-sm text-base-content/60">
                      <span>{edu.years}</span>
                      <span>{edu.details}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <SectionHeading title="Awards & Achievements" />
                <ul className="space-y-4">
                  {achievements.map((ach, idx) => (
                    <li key={idx}>
                      <div className="flex justify-between items-start">
                        <span className="font-medium">{ach.title}</span>
                        <span className="ml-4 text-sm text-base-content/60 shrink-0">
                          {ach.year}
                        </span>
                      </div>
                      <span className="text-sm text-base-content/80">
                        {ach.institution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </motion.div>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
