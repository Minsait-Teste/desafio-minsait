// import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const generateToken = async (credentials : any) => {
        const { username, password } = credentials;

        if (!username || !password) {
            throw { name: "validationError", message: "Username and password are required" };
        }

        if (username !== "admin" || password !== "123456") {
            throw { name: "notAuthorized", message: "Invalid username or password" };
        }

        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            throw { name: "ConnectionError", message: "JWT secret key is not set in the environment variables" };
        }

        const token = jwt.sign({ username }, secretKey);

        return token
};

export const authService = {
    generateToken
}
