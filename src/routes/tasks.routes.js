import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import {
  getTask,
  getTasks,
  deleteTask,
  putTask,
  createTask,
} from "../controllers/tasksControllers.js";
const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", putTask);

export default router;
