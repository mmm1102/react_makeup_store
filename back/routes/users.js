import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";
// import loginSchema from "../validation/LoginValidation.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {validateLogin} from "../middleware/registrationValidator.js"
dotenv.config();

const router = express.Router();

//register
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, username, password, confirmPassword } = req.body;
  const {error, value} = validateLogin(req.body)
  if(error){
    console.log(error);
    return res.send(error.details)
  }

  try {
    const user = await UserModel.findOne({ username });

    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      confirmPassword
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
});

//login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, process.env.REACT_APP_SECRET);
    res.status(200).json({ token, userID: user._id });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
});

//show all users
router.get("/all_users", async (req, res) => {
  try {
    const response = await UserModel.find({});
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//show one user
router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No user exist with id: ${id}` });
    }
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No user exist with id: ${id}` });
    }
    await UserModel.findByIdAndRemove(id);
    res.json({ message: "User deleted from database" });
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
});

//update user
router.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, password, email } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No user exist with id: ${id}` });
    }
    const updatedUser = {
      
      username,
      password,
      email
    };
    await UserModel.findByIdAndUpdate(id, updatedUser);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export { router as userRouter };
