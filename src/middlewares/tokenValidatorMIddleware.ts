import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function validateTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw { name: "notAuthorized", message: "Token not provided or invalid" };
    }

    const token = authHeader.split(" ")[1];
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
        throw { name: "ConnectionError", message: "JWT secret key is not set in environment variables" };
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        next();
    } catch (error) {
        throw { name: "notAuthorized", message: "Invalid token" };
    }
}
