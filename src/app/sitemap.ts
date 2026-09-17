import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://builddinodefense.top";

  // Static paths that always exist
  const staticPaths = [
    "/",
    "/guide",
    "/mechanics",
    "/combat",
    "/progression",
    "/controls",
    "/community",
    "/privacy-policy",
    "/terms-of-service",
    "/copyright",
    "/about",
  ];

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...dynamicPaths];

  const categoryPaths = new Set([
    "/guide",
    "/mechanics",
    "/combat",
    "/progression",
    "/controls",
    "/community",
  ]);

  const legalPaths = new Set([
    "/privacy-policy",
    "/terms-of-service",
    "/copyright",
    "/about",
  ]);

  return routing.locales.flatMap((locale) =>
    paths.map((path) => {
      let priority = 0.6;
      let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

      if (path === "/") {
        priority = 1.0;
        changeFrequency = "daily";
      } else if (categoryPaths.has(path)) {
        priority = 0.8;
        changeFrequency = "weekly";
      } else if (legalPaths.has(path)) {
        priority = 0.3;
        changeFrequency = "monthly";
      }

      return {
        url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      };
    }),
  );
}
