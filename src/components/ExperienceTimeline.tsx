import { experiences } from "../data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8 ml-3 border-base-300 border-l">
      {experiences.map((exp) => (
        <div key={exp.id} className="relative pl-8">
          <div className="top-2 -left-[6.5px] absolute bg-base-300 rounded-full ring-4 ring-base-100 w-3 h-3"></div>
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-baseline mb-2">
            <h3 className="font-medium text-lg">{exp.title}</h3>
            <span className="text-sm text-base-content/70">{exp.date}</span>
          </div>
          <p className="mb-3 font-medium text-base-content/80">
            {exp.company} — {exp.location}
          </p>
          <ul className="space-y-2 ml-4 text-sm text-base-content/80 leading-relaxed list-disc list-outside">
            {exp.responsibilities.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
