import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import color from "colors";
import productRouter from "./route/productRouter.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config({});

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("Api is running...........");
});
app.use("/api/products", productRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`running the server on port ${PORT}`.yellow.bold));
