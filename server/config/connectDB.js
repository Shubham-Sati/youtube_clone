import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  } 
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

export { connectDB };
