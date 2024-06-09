import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { register } from "../controllers/register.js";
import { profile } from "../controllers/profile.js";
import { login } from "../controllers/login.js";
import { logout } from "../controllers/logout.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", validateToken, profile);

export default router;
