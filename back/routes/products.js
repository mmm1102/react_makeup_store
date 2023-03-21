import express from "express";
import {ProductModel} from "../models/Product.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

//register-upload product
router.post("/upload", async (req, res) => {
  const {productName, brand, category, price, img} = req.body;
  try{
    const product = await ProductModel.findOne({productName});
    if (product) {
      return res.status(400).json({message: "Product you want to add already exists"});
    }
    const newProduct = new ProductModel({
      productName, brand, category, price, img,
    })
    await newProduct.save();
    res.status(201).json({ message:"Product uploaded to store"})
  } catch (err){
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
})

//show all products
router.get("/", async (req, res) => {
  try {
const response = await ProductModel.find({});
res.json(response);
  }
  catch(err){
    req.json(err);
    console.log(err);
  }
})

export {router as productRouter};