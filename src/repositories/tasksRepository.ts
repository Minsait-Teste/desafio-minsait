import prisma from "../config/database.js";
import { CreateTaskData } from "./../services/tasksService.js"

async function registerTask(task: CreateTaskData) {
    await prisma.task.create({data: task})
}

async function getAllTasks(){
    return await prisma.task.findMany();
}

async function checkTaskById(id : number) {
    return prisma.task.findUnique({where: {id}})
}

async function deleteTaskById(id: number) {
    await prisma.task.delete({where: {id}})
}

async function updateTaskById(task: CreateTaskData, id: number) {
    await prisma.task.update({
        where: {id},
        data: {
            title: task.title,
            description: task.description,
            status: task.status
        }
    })
}

export const tasksRepository = {
    registerTask,
    getAllTasks,
    checkTaskById,
    deleteTaskById,
    updateTaskById
}