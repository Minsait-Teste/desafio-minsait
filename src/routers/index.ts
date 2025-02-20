import { Router } from "express";
import authRouter from "./authRouter.js";
import tasksRouter from "./tasksRouter.js";

const router = Router();
router.use(authRouter)
router.use(tasksRouter)

export default router;

