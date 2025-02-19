import { Router } from "express";

const tasksRouter = Router();

tasksRouter.get("/tasks");
tasksRouter.get("/tasks/:id");
tasksRouter.post("/tasks");
tasksRouter.put("/tasks/:id");
tasksRouter.delete("/tasks/:id");

export default tasksRouter;