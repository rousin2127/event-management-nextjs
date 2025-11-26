import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("event_management");

    const data = await req.json();

    // Convert single object into array
    const events = Array.isArray(data) ? data : [data];

    const result = await db.collection("events").insertMany(events);

    return NextResponse.json(
      { message: "Events added successfully", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/events error:", error);
    return NextResponse.json(
      { message: "Failed to add events", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("event_management");

    const events = await db.collection("events").find().toArray();

    return NextResponse.json(events);
  } catch (error) {
    console.error("GET /api/events error:", error);
    return NextResponse.json(
      { message: "Failed to fetch events", error: error.message },
      { status: 500 }
    );
  }
}