import {Request, Response, NextFunction} from "express";

export function validateSchema(schema : any) {
    return (req: Request, res: Response, next : NextFunction) => { 
      const {error} = schema.validate(req.body, {abortEarly: false});
      if (error) {
        console.log(error);
        return res.status(422).send(error.details.map(detail => detail.message));
      }
      next();
    }
  }
  