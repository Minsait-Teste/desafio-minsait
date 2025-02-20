import { Request, Response } from "express";
import { tasksService } from "../services/tasksService.js";

export async function createTask (req: Request, res: Response) {
    await tasksService.createTask(req.body);
    res.status(201).send('Task created');
}

export async function listTasks (req: Request, res: Response) {
    const tasks = await tasksService.listTasks();
    res.status(200).send(tasks);
}

export async function listTaskById (req: Request, res: Response) {
    const {id} = req.params;
    const tasks = await tasksService.listTaskById(parseInt(id));
    res.status(200).send(tasks);
}

export async function deleteTask (req: Request, res: Response) {
    const {id} = req.params;
    await tasksService.deleteTask(parseInt(id));
    res.status(200).send("Task deleted");
}

export async function updateTask (req: Request, res: Response) {
    const {id} = req.params;
    await tasksService.updateTask(req.body, parseInt(id));
    res.status(200).send("Tasks updated")
}