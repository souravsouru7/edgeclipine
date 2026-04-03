import { readFileSync } from "fs";
import path from "path";

export default function Page() {
  const edgeStoryHtml = readFileSync(
    path.join(process.cwd(), "public", "edge-story.html"),
    "utf8",
  );

  return (
    <main className="h-screen w-screen overflow-hidden bg-black">
      <iframe
        srcDoc={edgeStoryHtml}
        title="Edgeclipine - The Story"
        className="h-full w-full border-0"
      />
    </main>
  );
}
