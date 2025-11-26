// import mongoose from "mongoose"

// export async function connect() {
//   try {
//     mongoose.connect(process.env.DB_URI)
//     const connection = mongoose.connection
//     return connection
//   } catch (error) {
//     console.log("errorooroororororoor")
//   }
// }









import { MongoClient } from "mongodb";

const uri = process.env.DB_URI;
if (!uri) throw new Error("Please define DB_URI in your environment");

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
