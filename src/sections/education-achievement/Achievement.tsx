import SectionHeading from "../../components/SectionHeading";
import { achievements } from "../../data/education";

export default function Achievement() {
  return (
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
  );
}
