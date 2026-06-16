import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db("event_management");

    const event = await db
      .collection("events")
      .findOne({ _id: new ObjectId(id) });

    if (!event) {
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: event });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Could not fetch data!", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(_request, { params }) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db("event_management");

    const result = await db
      .collection("events")
      .deleteOne({ _id: new ObjectId(id) });

    if (!result.deletedCount) {
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Delete failed", error: error.message },
      { status: 500 }
    );
  }
}
