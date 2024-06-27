import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import User from "../models/user.js";

export const validateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(403).json({ message: "Token not found" });
  }

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(401 | { message: "Invalid token" });
    }
    req.user = user;
    const userFound = User.findById(user.id);
    if (!userFound) return res.status(404).json({ message: "User not found" });
    return res.json(userFound);
    next();
  });
};
