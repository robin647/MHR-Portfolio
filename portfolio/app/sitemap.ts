import type { MetadataRoute } from "next";
import projects from "@/data/projects.json";

const siteUrl = "https://www.alexrahman.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = (projects as { slug: string }[]).map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
