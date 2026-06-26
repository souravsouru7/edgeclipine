import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://www.edgecipline.com";
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/features`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.8 : 0.6,
  }));

  return [...staticPages, ...blogPages];
}
