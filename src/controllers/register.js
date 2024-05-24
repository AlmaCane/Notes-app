import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

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
    const token = await createAccessToken({ id: finalUser._id });
    res.cookie("token", token);
    res.json({
      id: finalUser._id,
      userName: finalUser.userName,
      email: finalUser.email,
      createdAt: finalUser.createdAt,
      updatedAt: finalUser.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
