import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, userName, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashPass,
    });

    const finalUser = await newUser.save();
    res.json({
      id: finalUser.id,
      userName: finalUser.userName,
      email: finalUser.email,
      createdAt: finalUser.createdAt,
      updatedAt: finalUser.updatedAt,
    });
  } catch (error) {
    console.log(error.message);
  }
};
