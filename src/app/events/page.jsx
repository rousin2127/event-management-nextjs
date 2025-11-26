import EventsList from "./EventsList";

export default async function EventsPage() {
  const res = await fetch("http://localhost:3000/api/events", {
    cache: "no-store", // always fetch latest from DB
  });

  const events = await res.json();

  return <EventsList events={events} />;
}

