import type { MetadataRoute } from "next";
import { catalog } from "../lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://www.skfragrances.in/",
    lastModified: new Date("2026-08-22"),
    changeFrequency: "weekly",
    priority: 1,
    images: [
      "https://www.skfragrances.in/media/square/aura-primary-sq.webp",
      "https://www.skfragrances.in/media/square/ethnic-primary-sq.webp",
      "https://www.skfragrances.in/media/square/sovereign-primary-sq.webp",
    ],
  },{
    url:"https://www.skfragrances.in/journal",
    lastModified:new Date("2026-08-22"),
    changeFrequency:"monthly",
    priority:.75,
  },...catalog.map(item=>({url:`https://www.skfragrances.in/products/${item.id}`,lastModified:new Date("2026-08-22"),changeFrequency:"weekly" as const,priority:.85,images:item.gallery.map(image=>`https://www.skfragrances.in${image}`)}))];
}
