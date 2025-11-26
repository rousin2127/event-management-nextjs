import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    time: { type: String, required: true },
    venue: { type: String, required: true },
    meta: { type: String, required: true },
    category: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
