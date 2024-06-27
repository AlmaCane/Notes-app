import User from "../models/user.js";

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "User not found" });
  return res.json({
    id: userFound._id,
    userName: userFound.userName,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
