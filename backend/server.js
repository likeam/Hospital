import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

config({
  path: "./config/config.env",
});

const app = express();

const PORT = 4000 || process.env.PORT;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.FRONTEND_URL_TWO],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);

  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HMS",
    })
    .then(() => {
      console.log("Connected to DataBase ");
    })
    .catch((err) =>
      console.log(`Cannt conneted to DataBase due to Error: ${err}`)
    );
});
