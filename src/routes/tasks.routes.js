import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
const router = Router();

router.get("/tasks", validateToken, (req, res) => res.send("tasks"));

export default router;
