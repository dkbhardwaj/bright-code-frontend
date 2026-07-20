import type { NextApiRequest, NextApiResponse } from "next";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_SLOTS = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

function getDb() {
  if (!getApps().length) {
    const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
    if (!b64) {
      throw new Error("FIREBASE_SERVICE_ACCOUNT_BASE64 is not set");
    }
    const serviceAccount = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
    initializeApp({ credential: cert(serviceAccount) });
  }
  return getFirestore();
}

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, company, phone, date, time, message, website } = req.body ?? {};

  // Honeypot: real users never fill this hidden field
  if (typeof website === "string" && website.length > 0) {
    return res.status(200).json({ ok: true });
  }

  const booking = {
    name: clean(name, 120),
    email: clean(email, 200),
    company: clean(company, 200),
    phone: clean(phone, 30),
    date: clean(date, 10),
    time: clean(time, 5),
    message: clean(message, 2000),
  };

  if (!booking.name) {
    return res.status(400).json({ ok: false, error: "Please enter your name." });
  }
  if (!EMAIL_RE.test(booking.email)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }
  if (!DATE_RE.test(booking.date)) {
    return res.status(400).json({ ok: false, error: "Please pick a date." });
  }
  // No same-day appointments: earliest bookable date is tomorrow
  if (booking.date <= new Date().toISOString().slice(0, 10)) {
    return res.status(400).json({ ok: false, error: "Please pick a date at least one day ahead." });
  }
  if (booking.phone && !/^[\d\s()+.-]{7,30}$/.test(booking.phone)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid phone number." });
  }
  if (booking.time && !TIME_SLOTS.includes(booking.time)) {
    return res.status(400).json({ ok: false, error: "Please pick a valid time slot." });
  }

  try {
    const db = getDb();
    await db.collection("bookings").add({
      ...booking,
      status: "new",
      source: "website",
      createdAt: FieldValue.serverTimestamp(),
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to save booking:", error);
    return res.status(500).json({ ok: false, error: "Something went wrong. Please email us instead." });
  }
}
