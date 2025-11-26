"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function AddEvent() {
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    image: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      id: "EV" + Math.floor(Math.random() * 90000 + 10000),
      title: form.title,
      description: form.description,
      shortDescription: form.shortDescription,
      image: form.image || "https://placehold.co/600x400",
      price: Number(form.price),
    };

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (!res.ok) throw new Error("Failed to add event");

      toast.success("Event added successfully!");

      setForm({
        title: "",
        shortDescription: "",
        description: "",
        price: "",
        image: ""
      });

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <input
          type="text"
          placeholder="Event Title"
          className="w-full p-3 border rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        {/* Short Description */}
        <input
          type="text"
          placeholder="Short Description"
          className="w-full p-3 border rounded"
          value={form.shortDescription}
          onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
          required
        />

        {/* Full Description */}
        <textarea
          placeholder="Full Description"
          className="w-full p-3 border rounded"
          rows="4"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />

        {/* Price / Date / Priority */}
        
          <input
            type="number"
            placeholder="Price"
            className="w-full p-3 border rounded"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />

        {/* Image URL */}
        <input
          type="text"
          placeholder="Image URL (optional)"
          className="w-full p-3 border rounded"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Add Event
        </button>
      </form>
    </div>
  );
}
