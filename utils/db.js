import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI; // Use MONGO_URI from .env
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in the environment variables");
        }

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Optional: Config for Mongoose
        });

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process if the connection fails
    }
};

export default connectDB;
