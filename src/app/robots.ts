import type { MetadataRoute } from "next"

const SITE_URL = "https://zyene.com"
/** Robots `Host:` should be the bare hostname (e.g. Yandex); not a full URL with scheme. */
const SITE_HOST = new URL(SITE_URL).host

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search crawlers — full access
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/callback/"],
      },
      // OpenAI — allow for ChatGPT search visibility
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic — allow for Claude AI visibility
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Perplexity — allow for Perplexity AI search
      { userAgent: "PerplexityBot", allow: "/" },
      // Bing Copilot
      { userAgent: "Bingbot", allow: "/" },
      // Block training crawlers (not search — won't affect AI citation)
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_HOST,
  }
}
