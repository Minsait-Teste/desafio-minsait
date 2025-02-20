import joi from 'joi'; 
import { CreateTaskData } from "./../services/tasksService.js"

const taskSchema = joi.object<CreateTaskData>({
  title: joi.string().required(),
  description: joi.string().required(),
  status: joi.string().valid("PENDENTE", "CONCLUIDA").required(),
});

export default taskSchema;