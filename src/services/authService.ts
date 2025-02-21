import jwt from "jsonwebtoken";

const generateToken = async (credentials: any) => {
    const { username, password } = credentials;

    if (!username || !password) {
        const error = new Error("Username and password are required");
        (error as any).name = "validationError";
        throw error;
    }

    if (username !== "admin" || password !== "123456") {
        const error = new Error("Invalid username or password");
        (error as any).name = "notAuthorized";
        throw error;
    }

    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        const error = new Error("JWT secret key is not set in the environment variables");
        (error as any).name = "ConnectionError";
        throw error;
    }

    const token = jwt.sign({ username }, secretKey);

    return { access_token: token };
};

export const authService = {
    generateToken
};
