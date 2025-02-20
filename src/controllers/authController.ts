import { Request, Response } from "express";
import { authService } from "../services/authService.js";

export const generateToken = async (req: Request, res: Response) => {
    const token = await authService.generateToken(req.body)
    res.status(201).send(token);
};
