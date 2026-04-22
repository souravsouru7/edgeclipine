import { readFileSync } from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  const edgeStoryHtml = readFileSync(
    path.join(process.cwd(), "content", "edge-story.html"),
    "utf8",
  );

  return (
    <main className="h-screen w-screen overflow-hidden bg-black">
      <iframe
        srcDoc={edgeStoryHtml}
        sandbox="allow-scripts allow-same-origin allow-forms"
        title="Edgeclipine - The Story"
        className="h-full w-full border-0"
      />
    </main>
  );
}
