interface ProjectLink {
  name: string;
  href: string;
}

export interface Experience {
  logo?: string;
  href?: string;
  start: string;
  end?: string;
  name: string;
  title: string;
  description: string[];
  links?: ProjectLink[];
}

export interface ExperienceProps {
  experience: Experience[]
}
