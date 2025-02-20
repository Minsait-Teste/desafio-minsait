import { Router } from "express";
import { generateToken } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/auth", generateToken);

export default authRouter;