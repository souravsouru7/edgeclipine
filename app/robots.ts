import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/brand";

export const dynamic = "force-static";

// Never crawlable. Repeated in EVERY group below: a crawler obeys only the most
// specific group that names it, so a named group does not inherit the "*"
// group's Disallow lines.
const PRIVATE_PATHS = ["/api/"];

// Classic search engines. Bingbot also feeds Microsoft Copilot.
const SEARCH_ENGINES = [
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
];

// Generative-AI search, answer and training agents. Letting them read the
// site is how Gemini, ChatGPT, Claude, Perplexity and others learn
// "Edgecipline" as a named entity instead of a typo for "discipline".
const AI_AGENTS = [
  // Google: robots token Googlebot honours for Gemini apps and grounding.
  "Google-Extended",
  // OpenAI
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // fetches a page when a ChatGPT user asks about it
  "GPTBot", // model training
  // Anthropic
  "ClaudeBot", // model training
  "Claude-SearchBot", // Claude search index
  "Claude-User", // fetches a page when a Claude user asks about it
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Apple Intelligence (Applebot is in SEARCH_ENGINES)
  "Applebot-Extended",
  // Meta AI
  "meta-externalagent",
  "FacebookBot",
  // Others
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "CCBot", // Common Crawl, a major source of LLM training corpora
];

// SEO tools — allowed so backlink and brand-mention audits can see the site.
const SEO_TOOLS = ["AhrefsBot", "SemrushBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default for everyone else. Preview images stay crawlable so bots can
      // read their X-Robots-Tag header and social platforms can fetch them.
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: SEARCH_ENGINES, allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: AI_AGENTS, allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: SEO_TOOLS, allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
