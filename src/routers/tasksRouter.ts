import { Router } from "express";
import { createTask, deleteTask, listTasks, updateTask } from "../controllers/tasksController.js";

const tasksRouter = Router();

tasksRouter.get("/tasks", listTasks);
tasksRouter.get("/tasks/:id");
tasksRouter.post("/tasks", createTask);
tasksRouter.put("/tasks/:id", updateTask);
tasksRouter.delete("/tasks/:id", deleteTask);

export default tasksRouter;