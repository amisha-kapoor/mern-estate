import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, () => {
  console.log("server is running");
});
app.use("/api/user", userRouter);
