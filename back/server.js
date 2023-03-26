import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { productRouter } from "./routes/products.js";

import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 5500;

//Middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CORS
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.use("/auth", userRouter);
app.use("/products", productRouter);

mongoose
  .connect(process.env.REACT_APP_MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

