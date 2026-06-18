import Achievement from "./Achievement";
import EducationSection from "./Education";

export default function EducationAchievementSection() {
  return (
    <section className="gap-12 grid grid-cols-1 md:grid-cols-2">
      <EducationSection />
      <Achievement />
    </section>
  );
}
