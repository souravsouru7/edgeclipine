import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Edgecipline — Get in Touch",
  description:
    "Have a question about Edgecipline? Reach out to the team. We respond to every message within 24–48 hours. Questions about waitlist, features, pricing, or partnerships welcome.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "https://www.edgecipline.com/contact",
    title: "Contact Edgecipline — Get in Touch",
    description:
      "Have a question about Edgecipline? Reach out — we respond within 24–48 hours.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline — Contact Us" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Edgecipline — Get in Touch",
    description: "Have a question? We respond to every message within 24–48 hours.",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
