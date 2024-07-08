import { Router } from "express";
import { validateSchema } from "../middlewares/validatetor.js";
import { validateToken } from "../middlewares/validateToken.js";
import { register } from "../controllers/register.js";
import { profile } from "../controllers/profile.js";
import { login } from "../controllers/login.js";
import { loginSchema, registerSchema } from "../schemas/auth.js";
import { logout } from "../controllers/logout.js";
const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", validateToken, profile);

export default router;
