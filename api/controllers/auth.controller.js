import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
// import bcryptjs from "bcryptjs";
// import bcrypt from "bcrypt";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};
