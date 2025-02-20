import { Router } from "express";
import { createTask, deleteTask, listTasks, listTaskById, updateTask } from "../controllers/tasksController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import taskSchema from "../schemas/taskSchema.js";
import updateSchema from "../schemas/updateSchema.js";
import { validateTokenMiddleware } from "../middlewares/tokenValidatorMIddleware.js";

const tasksRouter = Router();

tasksRouter.get("/tasks", validateTokenMiddleware, listTasks);
tasksRouter.get("/tasks/:id", listTaskById);
tasksRouter.post("/tasks", validateSchema(taskSchema), createTask);
tasksRouter.put("/tasks/:id", validateSchema(updateSchema), updateTask);
tasksRouter.delete("/tasks/:id", deleteTask);

export default tasksRouter;