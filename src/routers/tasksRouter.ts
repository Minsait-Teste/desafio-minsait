import { Router } from "express";
import { createTask, deleteTask, listTasks, listTaskById, updateTask } from "../controllers/tasksController.js";

const tasksRouter = Router();

tasksRouter.get("/tasks", listTasks);
tasksRouter.get("/tasks/:id", listTaskById);
tasksRouter.post("/tasks", createTask);
tasksRouter.put("/tasks/:id", updateTask);
tasksRouter.delete("/tasks/:id", deleteTask);

export default tasksRouter;