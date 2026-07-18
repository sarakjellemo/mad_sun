import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/tjanster", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/arbeten", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/om-oss", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/journal", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/kontakt", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  return staticRoutes.map(({ url, ...rest }) => ({
    url: `${siteConfig.url}${url}`,
    lastModified: new Date(),
    ...rest,
  }));
}
