const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.local" }); 
 // Load .env.local variables

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ ERROR: MONGODB_URI is not set in .env.local!");
  process.exit(1);
}

const client = new MongoClient(uri);

async function testDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
  } finally {
    await client.close();
  }
}

testDB();
