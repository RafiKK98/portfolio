import SectionHeading from "../../components/SectionHeading";
import { education } from "../../data/education";

export default function EducationSection() {
  return (
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
  );
}
