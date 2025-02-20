import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function validateTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        const error = new Error("Token not provided or invalid");
        (error as any).name = "notAuthorized";
        throw error;
    }

    const token = authHeader.split(" ")[1];
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
        const error = new Error("JWT secret key is not set in environment variables");
        (error as any).name = "ConnectionError";
        throw error;
    }

    try {
        jwt.verify(token, secretKey);
        next();
    } catch (error) {
        const err = new Error("Invalid token");
        (err as any).name = "notAuthorized";
        throw err;
    }
}
