const { MongoClient, ServerApiVersion } = require('mongodb');

if(!process.env.DB_URI) {
    throw new Error("Mongo Uri not Found !")
}

const uri = process.env.DB_URI;

let client;
let clientPromise;

// Reuse connection during development (important for Next.js hot reload)
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;