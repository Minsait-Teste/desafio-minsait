import joi from 'joi'; 
import { CreateTaskData } from "./../services/tasksService.js"

const updateSchema = joi.object<CreateTaskData>({
  title: joi.string().allow(null,''),
  description: joi.string().allow(null,''),
  status: joi.string().valid("PENDENTE", "CONCLUIDA").required(),
});

export default updateSchema;