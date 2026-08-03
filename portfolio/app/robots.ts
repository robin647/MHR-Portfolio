import type { MetadataRoute } from "next";

const siteUrl = "https://mhr-portfolio-git-main-mhrobin471-5610s-projects.vercel.app/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
