import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import VKMRoutes from "./infrastructure/routes/VKMRoutes";
import CourseRoutes from "./infrastructure/routes/CourseRoutes"

// Create a new express application instance
const app = express();

// Middleware om JSON body te parsen
app.use(express.json());

// CORS middleware toevoegen
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

// Set the network port
const port = process.env.PORT || 4600;
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in .env");
}

// MongoDB connection
mongoose.connect(mongoUri)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

// VKM routes
app.use("/api/vkms", VKMRoutes);
app.use("/api/courses", CourseRoutes)

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
