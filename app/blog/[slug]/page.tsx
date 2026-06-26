import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const ogTitle = `${post.title} | Edgecipline Blog`;
  const pageUrl = `https://www.edgecipline.com/blog/${slug}`;
  return {
    title: ogTitle,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    authors: [{ name: "Edgecipline", url: "https://www.edgecipline.com" }],
    openGraph: {
      type: "article",
      url: pageUrl,
      title: ogTitle,
      description: post.description,
      publishedTime: post.publishedAt,
      authors: ["Edgecipline"],
      tags: [post.category, "Trading Psychology", "Edgecipline"],
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: post.description,
      images: ["/opengraph-image"],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-[22px] font-extrabold tracking-tight text-white mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="text-[15px] font-semibold text-white/90 mt-5 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.match(/^\*\*\d+\./)) {
      const cleaned = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
      const dotIdx = cleaned.indexOf("**");
      const boldPart = dotIdx > -1 ? cleaned.slice(0, cleaned.indexOf("**", 1)) : cleaned.split(" ")[0];
      const rest = cleaned.slice(boldPart.length + (dotIdx > -1 ? 2 : 0));
      elements.push(
        <p key={i} className="text-[15px] text-[#8b95aa] leading-[1.85] mt-4">
          <strong className="text-white font-semibold">{boldPart}</strong>
          {rest}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="mt-4 mb-4 flex flex-col gap-2">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[14px] text-[#8b95aa] leading-relaxed">
              <span className="mt-[9px] w-3 h-px bg-[rgba(0,255,178,0.4)] flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white/85'>$1</strong>") }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-[15px] text-[#8b95aa] leading-[1.9] mt-4"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white/85'>$1</strong>")
              .replace(/\*(.*?)\*/g, "<em>$1</em>"),
          }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  const pageUrl = `https://www.edgecipline.com/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "Edgecipline", url: "https://www.edgecipline.com" },
    publisher: {
      "@type": "Organization",
      name: "Edgecipline",
      url: "https://www.edgecipline.com",
      logo: { "@type": "ImageObject", url: "https://www.edgecipline.com/logo.png" },
    },
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    articleSection: post.category,
    keywords: ["Edgecipline", post.category, "trading psychology", "trading journal"],
    image: { "@type": "ImageObject", url: "https://www.edgecipline.com/opengraph-image" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.edgecipline.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.edgecipline.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="pt-28 pb-0 px-5 md:px-9">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[11px] text-[#8b95aa]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/50 truncate max-w-[200px]">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article header */}
        <header className="pt-10 pb-12 px-5 md:px-9">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border border-[rgba(0,255,178,0.25)] text-[#00ffb2] bg-[rgba(0,255,178,0.06)]">
                {post.category}
              </span>
              <span className="font-mono text-[11px] text-[#8b95aa]">{post.readTime} min read</span>
              <span className="font-mono text-[11px] text-[#8b95aa]">{formatDate(post.publishedAt)}</span>
            </div>
            <h1 className="text-[clamp(28px,5vw,52px)] font-extrabold leading-[1.08] tracking-tight text-white mb-5">
              {post.title}
            </h1>
            <p className="text-[17px] text-[#8b95aa] leading-relaxed border-l-2 border-[rgba(0,255,178,0.3)] pl-5">
              {post.description}
            </p>
          </div>
        </header>

        {/* Article body */}
        <article className="px-5 md:px-9 pb-16 border-t border-white/[0.05] pt-12">
          <div className="max-w-3xl mx-auto">
            {renderContent(post.content)}
          </div>
        </article>

        {/* CTA in article */}
        <section className="px-5 md:px-9 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-[rgba(0,255,178,0.15)] bg-[rgba(0,255,178,0.03)] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="font-bold text-[15px] text-white mb-1">
                  Track your own behavioral patterns
                </div>
                <p className="text-[13px] text-[#8b95aa]">
                  Join 847+ traders on the Edgecipline waitlist.
                </p>
              </div>
              <Link
                href="/#cta"
                className="flex-shrink-0 bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910] font-bold text-[12px] uppercase tracking-[0.1em] px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                Join Waitlist →
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="py-16 px-5 md:px-9 border-t border-white/[0.05]">
            <div className="max-w-3xl mx-auto">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-8">
                Related Articles
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 hover:border-white/[0.14] transition-all duration-200"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8b95aa] mb-3">
                      {rp.category}
                    </div>
                    <h3 className="text-[14px] font-semibold text-white/80 group-hover:text-white transition-colors leading-snug mb-2">
                      {rp.title}
                    </h3>
                    <span className="font-mono text-[11px] text-[#00ffb2] group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      Read →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
