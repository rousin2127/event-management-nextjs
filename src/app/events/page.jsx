import EventsList from "./EventsList";
import { headers } from "next/headers";

export default async function EventsPage() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto =
    h.get("x-forwarded-proto") ?? (process.env.VERCEL ? "https" : "http");
  const baseUrl = host ? `${proto}://${host}` : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/events`, {
    cache: "no-store", // always fetch latest from DB
  });

  const events = await res.json();

  return <EventsList events={events} />;
}

