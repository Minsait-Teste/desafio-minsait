import { Router } from "express";
import { createTask, deleteTask, listTasks, listTaskById, updateTask } from "../controllers/tasksController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import taskSchema from "../schemas/taskSchema.js";

const tasksRouter = Router();

tasksRouter.get("/tasks", listTasks);
tasksRouter.get("/tasks/:id", listTaskById);
tasksRouter.post("/tasks", validateSchema(taskSchema), createTask);
tasksRouter.put("/tasks/:id", validateSchema(taskSchema), updateTask);
tasksRouter.delete("/tasks/:id", deleteTask);

export default tasksRouter;