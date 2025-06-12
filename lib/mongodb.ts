import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
// console.log("🔗 Connecting to MongoDB with URI:", MONGODB_URI);

if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables!");
}

let isConnected = false;

export async function connectToDB() {
    if (isConnected) {
        console.log("✅ Using existing MongoDB connection");
        return;
    }
    
    try {
        // Add connection event listeners
        mongoose.connection.on('connected', () => {
            console.log('✅ MongoDB connected successfully');
        });

        mongoose.connection.on('error', (err) => {
            console.error('❌ MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('⚠️ MongoDB disconnected');
            isConnected = false;
        });

        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI, {
            dbName: "greenetdb",
        });
        
        isConnected = true;
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        // Provide more specific error messages
        if (error instanceof Error) {
            if (error.message.includes('bad auth')) {
                throw new Error("MongoDB authentication failed. Please check your username and password.");
            } else if (error.message.includes('ECONNREFUSED')) {
                throw new Error("Could not connect to MongoDB. Please check if the server is running and the connection string is correct.");
            }
        }
        throw new Error("Failed to connect to MongoDB");
    }
}
