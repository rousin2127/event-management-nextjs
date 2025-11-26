"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

export default function EventsList({ events }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    const set = new Set(events.map((e) => e.category));
    return ["all", ...Array.from(set)];
  }, [events]);

const filtered = useMemo(() => {
  return events.filter((e) => {
    const title = e.title?.toLowerCase() || "";
    const description = e.description?.toLowerCase() || "";
    const location = e.location?.toLowerCase() || "";
    const q = query.toLowerCase();

    const matchesQuery =
      q === "" ||
      title.includes(q) ||
      description.includes(q) ||
      location.includes(q);

    const matchesCategory = category === "all" || e.category === category;

    return matchesQuery && matchesCategory;
  });
}, [events, query, category]);


  return (
    <main className="p-6 max-w-7xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-pink-700/80">Events</h1>
        <p className="text-gray-600">
          Discover upcoming events — search, filter by category, and view details.
        </p>
      </header>

      <section className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <input
          type="search"
          placeholder="Search events..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:flex-1 border px-4 py-2 rounded-lg"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-48 border px-3 py-2 rounded-lg"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All Categories" : c}
            </option>
          ))}
        </select>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((ev) => (
          <div
            key={ev._id}
            className="bg-white rounded-2xl shadow-md shadow-pink-700/80 overflow-hidden flex flex-col"
          >
            <img
              src={ev.image ?? "https://placehold.co/600x400?text=No+Image"}
              alt={ev.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-4 flex-1 flex flex-col">
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

              <div className="mt-auto text-sm text-gray-500">
                <div>{ev.date}</div>
                <div>{ev.location}</div>
              </div>

              <div className="mt-3 flex justify-between items-center">
                <span className="font-semibold text-indigo-600">
                  {ev.price ? `BDT ${ev.price}` : "Free"}
                </span>

                <Link
                  href={`/events/${ev._id}`}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-gray-600">No events found.</p>
      )}
    </main>
  );
}
