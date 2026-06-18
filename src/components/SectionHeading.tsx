type SectionHeadingProps = { title: string; subtitle?: string };

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="font-semibold text-2xl tracking-tight">{title}</h2>
      <div className="bg-base-300 mt-4 w-full h-px">{subtitle}</div>
    </div>
  );
}
