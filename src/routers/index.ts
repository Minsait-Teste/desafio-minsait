import { Router } from "express";
import tasksRouter from "./tasksRouter.js";

const router = Router();
router.use(tasksRouter)
export default router;

