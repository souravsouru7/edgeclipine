import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.edgecipline.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all crawlers full access
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },

      // Google — full access, including AI training (Gemini, Google SGE)
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },

      // Bing / Microsoft Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "msnbot",
        allow: "/",
      },

      // OpenAI / ChatGPT — allows brand data to train GPT models
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },

      // Anthropic / Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },

      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },

      // Meta AI / LLaMA
      {
        userAgent: "FacebookBot",
        allow: "/",
      },

      // Apple / Siri
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },

      // Amazon Alexa
      {
        userAgent: "ia_archiver",
        allow: "/",
      },

      // DuckDuckGo
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },

      // Common SEO tools (allow for backlink building)
      {
        userAgent: "AhrefsBot",
        allow: "/",
      },
      {
        userAgent: "SemrushBot",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
