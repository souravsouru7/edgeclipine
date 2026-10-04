import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Runs on Vercel as a full Next.js app (NOT a static export) so API routes
     like /api/waitlist work. Do not re-add `output: "export"` — it disables
     API routes and breaks the waitlist form. */
  images: {
    unoptimized: true,
  },
  // Consolidate on www.edgecipline.com as the single canonical host.
  // 301-redirects the bare apex (edgecipline.com) to www so there is one
  // indexable domain, matching metadataBase, robots.ts, sitemap.ts and schema.
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "edgecipline.com",
          },
        ],
        destination: "https://www.edgecipline.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;