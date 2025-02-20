import {Request, Response, NextFunction} from "express";

export function validateSchema(schema : any) {
    console.log("Chamou o validate schema")
    return (req: Request, res: Response, next : NextFunction) => { 
      const {error} = schema.validate(req.body, {abortEarly: false});
      console.log(error);
      if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
      }
      next();
    }
  }
  