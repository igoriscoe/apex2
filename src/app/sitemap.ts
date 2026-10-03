import type { MetadataRoute } from "next";
import { navigation } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  return navigation.map(({ href }) => ({ url: new URL(href, host).toString(), changeFrequency: "monthly", priority: href === "/" ? 1 : 0.7 }));
}