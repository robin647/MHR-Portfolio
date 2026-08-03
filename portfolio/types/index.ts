export type Project = {
  slug: string;
  title: string;
  description: string;
  category: "AI" | "Backend" | "Frontend" | "Automation" | "Full Stack" | "ML";
  techStack: string[];
  thumbnail: string;
  gallery: string[];
  github: string;
  liveDemo: string;
  status: "Live" | "In Progress" | "Archived";
  features: string[];
  client: string;
  date: string;
  tags: string[];
  featured: boolean;
};

export type SkillCategory = {
  category: string;
  items: { name: string; level: number }[];
};

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  logo: string;
};
