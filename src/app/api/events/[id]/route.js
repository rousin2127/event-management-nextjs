import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import Event from "@/models/Events";

export async function DELETE(_, { params }) {
  await clientPromise;

  const { id } = params;

  await Event.findByIdAndDelete(id);

  return NextResponse.json({ message: "Event deleted" });
}
