import { GitFork, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";

export default function HeroSection() {
  return (
    <section className="space-y-6">
      <h1 className="font-bold text-4xl md:text-5xl tracking-tight">
        {profile.name}
      </h1>
      <p className="font-medium text-base-content/80 text-xl">{profile.role}</p>
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
  );
}
