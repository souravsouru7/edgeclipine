import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { BLOG_POSTS, CATEGORIES, getFeaturedPosts } from "@/lib/blog";

const OG_IMAGE = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline Blog" }];

export const metadata: Metadata = {
  title: "Blog — Trading Psychology, Journal & Behavior Analytics | Edgecipline",
  description:
    "Insights on trading psychology, behavioral finance, journaling habits, risk management, NIFTY & BANKNIFTY strategies, and trading discipline from the Edgecipline team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "https://www.edgecipline.com/blog",
    title: "Edgecipline Blog — Trading Psychology & Discipline",
    description:
      "Insights on trading psychology, journaling habits, risk management, NIFTY & BANKNIFTY, and building the discipline edge.",
    images: OG_IMAGE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgecipline Blog — Trading Psychology & Discipline",
    description:
      "Trading psychology, journaling, risk management, and behavioral analytics insights from Edgecipline.",
    images: ["/opengraph-image"],
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = getFeaturedPosts();
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 px-5 md:px-9 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[rgba(0,255,178,0.4)]" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8b95aa]">
                Edgecipline Blog
              </span>
              <div className="w-6 h-px bg-[rgba(0,255,178,0.4)]" />
            </div>
            <h1 className="text-[clamp(32px,6vw,58px)] font-extrabold leading-[1.08] tracking-tight text-white mb-5">
              Trade smarter.{" "}
              <em className="not-italic text-[#00ffb2]">Think clearer.</em>
            </h1>
            <p className="text-[16px] text-[#8b95aa] leading-relaxed max-w-xl mx-auto">
              Insights on trading psychology, behavioral finance, journaling habits, and building the
              discipline edge — from the Edgecipline team.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-12 px-5 md:px-9">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="font-mono text-[10px] uppercase tracking-[0.14em] px-3.5 py-2 rounded-full border border-white/[0.08] text-[#8b95aa] bg-white/[0.02]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured posts */}
        <section className="py-10 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-8">
              Featured Articles
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 hover:border-[rgba(0,255,178,0.2)] hover:bg-[rgba(0,255,178,0.02)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-1 rounded-full border border-[rgba(0,255,178,0.25)] text-[#00ffb2] bg-[rgba(0,255,178,0.06)]">
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px] text-[#8b95aa]">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="text-[18px] font-bold leading-snug tracking-tight text-white group-hover:text-white/90 mb-3 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[13px] text-[#8b95aa] leading-relaxed mb-5 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#8b95aa]">
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="text-[#00ffb2] text-[12px] font-mono group-hover:translate-x-1 transition-transform duration-200">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All posts */}
        {rest.length > 0 && (
          <section className="py-10 px-5 md:px-9 border-t border-white/[0.05]">
            <div className="max-w-5xl mx-auto">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-8">
                All Articles
              </div>
              <div className="flex flex-col gap-0 border-t border-white/[0.06]">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group border-b border-white/[0.06] py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.01] transition-colors duration-200 rounded-lg px-1"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8b95aa] border border-white/[0.08] px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="font-mono text-[10px] text-[#8b95aa]">
                          {post.readTime} min
                        </span>
                      </div>
                      <h3 className="text-[15px] font-semibold text-white/85 group-hover:text-white transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-6 flex-shrink-0">
                      <span className="font-mono text-[11px] text-[#8b95aa]">
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="text-[#00ffb2] text-[12px] font-mono group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABanner
          title="Ready to journal smarter?"
          description="Join 847+ traders building the discipline edge. Get early access to Edgecipline when we launch."
        />
      </main>
      <Footer />
    </>
  );
}
