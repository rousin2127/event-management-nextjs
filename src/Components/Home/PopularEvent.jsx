"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function PopularEventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const res = await fetch("http://localhost:3000/api/events", {
        cache: "no-store",
      });
      const data = await res.json();
      setEvents(data);
    }
    loadEvents();
  }, []);

  // Get first 6 events
  const popular = events.slice(0, 6);

  return (
    <main className="max-w-7xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center lg:my-10 text-pink-700/80">Popular Events</h1>

      {/* Grid of 6 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popular.map((ev) => (
          <div
            key={ev._id}
            className="bg-white rounded-2xl shadow-md shadow-pink-700/80 overflow-hidden flex flex-col"
          >
            <img
              src={ev.image ?? "https://placehold.co/600x400?text=No+Image"}
              alt={ev.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-bold mb-1">{ev.title}</h2>

              <p
                className="text-gray-600 text-sm mb-3"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {ev.description}
              </p>

              <div className="mt-auto flex justify-between items-center">
                <span className="font-semibold text-indigo-600">
                  {ev.price ? `BDT ${ev.price}` : "Free"}
                </span>

                <Link
                  href={`/events/${ev._id}`}
                  className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {popular.length === 0 && (
        <p className="text-gray-600 text-center mt-8">
          No popular events found.
        </p>
      )}
    </main>
  );
}

