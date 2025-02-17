import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables!");
}

let isConnected = false;

export async function connectToDB() {
    if (isConnected) return;
    
    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "greenetdb",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
        
        isConnected = true;
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}
