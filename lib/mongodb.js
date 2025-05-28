// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ;
console.log("🔗 MongoDB URI:", uri);
if (!uri) throw new Error("🛑 Missing MONGODB_URI");

let clientPromise;
if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  global._mongoClientPromise = client
    .connect()
    .then(() => {
      console.log("✅ MongoDB connected");
      return client;
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
      throw err;
    });
}
clientPromise = global._mongoClientPromise;

export async function getDb() {
  const client = await clientPromise;
  return client.db("campusx");
}
