import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/index.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { setupSwagger } from "./swagger.js"; // Importação correta

const app = express();

app.use(json());
app.use(cors());
app.use(router);
setupSwagger(app);
app.use(errorHandlerMiddleware);


export default app;
