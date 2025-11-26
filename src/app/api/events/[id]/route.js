import { connect } from "mongoose";
import { NextResponse } from "next/server";


connect()
export async function GET(request, {params}) {
  const eventID= params.eventid
  try {
    const result = await Event.findOne({_id: eventId})
     return NextResponse.json({success: true,data:resu })
  } catch (error) {
    return NextResponse.json({success: false,message:"Could not fetch data !" })
  }
}
