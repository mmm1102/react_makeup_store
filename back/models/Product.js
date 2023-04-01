import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: { 
    type: String, 
    required: true 
  },
  brand: {
    type: String,
  required: true 
  },
  category: {
    type: String,
  required: true 
  },
  price: {
    type: Number,
  required: true 
  },
  img: {
    type: String,
  required: false
  },
});

export const ProductModel = mongoose.model("products", ProductSchema)