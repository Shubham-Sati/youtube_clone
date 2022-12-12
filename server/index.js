import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/connectDB.js";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
dotenv.config();

//Middlewares 
app.use(express.json()); // to accept json format req from Api
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//Routes Apis
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// middleware for error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

const PORT = process.env.PORT || 8800;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port number ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
