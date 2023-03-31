import express from "express";
import { ProductModel } from "../models/Product.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const router = express.Router();

//register-upload product
router.post("/upload", async (req, res) => {
  const { productName, brand, category, price, img } = req.body;
  try {
    const product = await ProductModel.findOne({ productName });
    if (product) {
      return res
        .status(400)
        .json({ message: "Product you want to add already exists" });
    }
    const newProduct = new ProductModel({
      productName,
      brand,
      category,
      price,
      img,
    });
    await newProduct.save();
    res.status(201).json({ message: "Product uploaded to store" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
});

//show all products
router.get("/", async (req, res) => {
  try {
    const response = await ProductModel.find({});
    res.json(response);
  } catch (err) {
    req.json(err);
    console.log(err);
  }
});

//show one product
router.get("/find/:id", async (req, res) => {
  // const {id} = req.params;
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
});

//upload product
router.post("/upload_product", async (req, res) => {
  const { productName, brand, category, price, img } = req.body;

  //ovde ce joi validacija
  // const {error, value} = validateLogin(req.body)
  // if(error){
  //   console.log(error);
  //   return res.send(error.details)
  // }

  try {
    const product = await ProductModel.findOne({ productName });
    if (product) {
      return res.status(400).json({ message: "Product already exist" });
    }
    const newProduct = new ProductModel({
      productName,
      brand,
      category,
      price,
      img,
    });

    await newProduct.save();
    res.status(201).json({ message: "New product added to database" });
  } catch (err) {
    res.status(500).json({ message: "Something wend wrong" });
    console.log(err);
  }
});

//remove product
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No product with id: ${id}` });
    }
    await ProductModel.findByIdAndRemove(id);
    res.json({ message: "Product removed from databse" });
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
});

//update product
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { productName, brand, category, price } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No product with id: ${id}` });
    }
    const updateProduct = {
      productName,
      brand,
      category,
      price,
    };
    await ProductModel.findByIdAndUpdate(id, updateProduct);
    res.json(updateProduct);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export { router as productRouter };
