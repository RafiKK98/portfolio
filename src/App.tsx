import { motion } from "framer-motion";
import { Fragment } from "react";
import Container from "./components/Container";
import ThemeToggle from "./components/ThemeToggle";
import ExperienceSection from "./sections/Experience";
import HeroSection from "./sections/Hero";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import EducationAchievementSection from "./sections/education-achievement";

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
            <HeroSection />

            {/* SKILLS */}
            <SkillsSection />

            {/* EXPERIENCE */}
            <ExperienceSection />

            {/* PROJECTS */}
            <ProjectsSection />

            {/* EDUCATION & ACHIEVEMENTS */}
            <EducationAchievementSection />
          </motion.div>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
