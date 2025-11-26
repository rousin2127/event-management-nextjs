"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ManageEventsPage() {
  const [events, setEvents] = useState([]);

  // Load all events
  const fetchEvents = async () => {
    const res = await fetch("http://localhost:3000/api/events", { cache: "no-store" });
    const data = await res.json();
    setEvents(data || []);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Delete event
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    const res = await fetch(`/api/events/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (data.success) {
      alert("Event deleted!");
      fetchEvents(); // Reload
    } else {
      alert("Delete failed");
    }
  };

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-pink-700">Manage Events</h1>

      {/* Empty State */}
      {events.length === 0 && (
        <p className="text-gray-600 text-center text-lg">No items found.</p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((ev) => (
          <div
            key={ev._id}
            className="bg-white rounded-2xl shadow p-4 flex flex-col"
          >
            <img
              src={ev.image || "https://placehold.co/600x400?text=No+Image"}
              alt={ev.title}
              className="h-40 w-full object-cover rounded-md"
            />

            <h2 className="font-bold text-lg mt-3">{ev.title}</h2>

            <div className="mt-auto flex justify-between items-center gap-2 pt-4">
              <Link
                href={`/events/${ev._id}`}
                className="px-3 py-2 bg-gray-600 text-white rounded-lg text-sm w-full text-center"
              >
                View
              </Link>

              <button
                onClick={() => handleDelete(ev._id)}
                className="px-3 py-2 bg-pink-700 text-white rounded-lg text-sm w-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

