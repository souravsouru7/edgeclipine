import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Runs on Vercel as a full Next.js app (NOT a static export) so API routes
     like /api/waitlist work. Do not re-add `output: "export"` — it disables
     API routes and breaks the waitlist form. */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;