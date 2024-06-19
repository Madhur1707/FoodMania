import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";
import cloudinary from "cloudinary";
import restaurantRoute from "./routes/RestaurantRoute";
import MyRestaurantRoute from "./routes/MyRestaurantRoute";
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health ok!" });
});

app.use("/api/my/user", MyUserRoute);
app.use("/api/my/restaurant", restaurantRoute);
app.use("/api/restaurant", MyRestaurantRoute);

app.listen(7000, () => {
  console.log("Server Started on localhost: 7000");
});
