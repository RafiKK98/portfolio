import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
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
  );
}
