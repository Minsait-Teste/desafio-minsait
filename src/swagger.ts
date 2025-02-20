import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Autenticação",
      version: "1.0.0",
      description: "Documentação da API de autenticação rodando no localhost:5000",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Servidor local",
      },
    ],
  },
  apis: ["src/swagger.yaml"], // Caminho para o arquivo Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
