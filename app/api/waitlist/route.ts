import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";

// Deliberately loose: the browser validates properly; this only rejects junk.
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, experience } = await req.json();

    const raw = typeof email === "string" ? email.trim() : "";
    if (!raw) {
      return NextResponse.json({ ok: false, error: "Email is required" }, { status: 400 });
    }
    if (!EMAIL_SHAPE.test(raw)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    // One entry per address. Older entries were stored as typed, so match the
    // raw spelling as well as the normalized one. A repeat is not an error for
    // the visitor — they are on the list — so it still answers ok, flagged.
    const normalized = raw.toLowerCase();
    const existing = await db
      .collection("waitlist")
      .where("email", "in", Array.from(new Set([normalized, raw])))
      .limit(1)
      .get();
    if (!existing.empty) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    await db.collection("waitlist").add({
      name: typeof name === "string" ? name.trim() : "",
      email: normalized,
      phone: phone || "",
      experience: experience || "",
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
