import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword,
  });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {

    return res.json({message: "User doesn't exist"})
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if(!isPasswordValid) {
    return res.json({message: "Username or password is incorrect"})
  }


  const token = jwt.sign({id: user._id}, process.env.REACT_APP_SECRET);
  res.json({token, userID: user._id})
});

export { router as userRouter };
