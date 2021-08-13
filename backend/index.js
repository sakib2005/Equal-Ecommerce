import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import color from "colors";

dotenv.config({});

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("Api is running...........");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`running the server on port ${PORT}`.yellow.bold));
