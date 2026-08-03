// ─────────────────────────────────────────────────────────
// EDIT THIS FILE to update every piece of personal info
// on the site. Everything else reads from here.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Robin Hossain",
  initials: "MHRobin",
  title: "Full-Stack & AI Enginer",
  roles: [
    "Python Developer",
    "Django Expert",
    "AI Engineer",
    "Automation Specialist",
    "React Developer",
  ],
  tagline:
    "I design and ship full-stack products and AI systems — from Django APIs to LLM-powered agents — for startups and teams worldwide.",
  bio: [
    "I'm a full-stack engineer who specializes in Python/Django backends, React/Next.js frontends, and applied AI — chatbots, LLM apps, and automation agents that remove repetitive work from a business.",
    "Over the last few years I've partnered with founders and small teams on Fiverr, Upwork, and direct contracts to take products from a rough idea to a deployed, maintained system — API design, database architecture, deployment, and everything between.",
    "I care about clean architecture and clear communication as much as working code: fewer surprises, fewer rewrites, and a codebase the next engineer can actually read.",
  ],
  mission:
    "Build reliable software and AI systems that quietly remove work from people's day.",
  vision:
    "A future where every small team has access to the same automation and AI leverage as a large one.",
  location: "Dhaka, Bangladesh",
  timezone: "GMT+6",
  email: "mhrobin471@gmail.com",
  phone: "+880 1781879276",
  availability: "Available for new projects — booking 2–3 weeks out",
  yearsExperience: 5,
  // Replace with "/images/profile.jpg" once you add your own photo to /public/images
  profileImage: "/robin.jpeg",
  resumeUrl: "/resume.pdf",
  githubUsername: "robin647",
  stats: [
    { label: "Projects Completed", value: 62, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Clients Worldwide", value: 38, suffix: "+" },
    { label: "Technologies", value: 24, suffix: "+" },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "University of Dhaka",
      period: "2017 – 2021",
    },
  ],
} as const;

export type Profile = typeof profile;
