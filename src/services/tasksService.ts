import { tasksRepository } from "../repositories/tasksRepository.js";
import { Task } from '@prisma/client';
export type CreateTaskData = Omit <Task, "id">

async function createTask(task: CreateTaskData) {
    await tasksRepository.registerTask(task);
}

async function listTasks() {
    const tasks = await tasksRepository.getAllTasks();
    return tasks;
}

async function listTaskById(taskId : number) {
    await tasksService.checkTaskId(taskId);
    const task = await tasksRepository.checkTaskById(taskId)
    return task;
}

async function deleteTask(taskId : number) {
    await tasksService.checkTaskId(taskId);
    await tasksRepository.deleteTaskById(taskId);
}

async function updateTask(task : CreateTaskData, taskId : number) {
    const previousTaskData = await tasksService.checkTaskId(taskId);
    const updatedTaskData = tasksService.updatedTaskData(task, previousTaskData);
    await tasksRepository.updateTaskById(updatedTaskData, taskId);
}

async function checkTaskId (taskId : number) {
    const response = await tasksRepository.checkTaskById(taskId);
    console.log("Response: ", response)

    if (!response) {
        throw { name: "notFound", message: "Task not found"}
    }
    else return response;
}

function updatedTaskData(updatedTaskData : CreateTaskData, previousTaskData : CreateTaskData) {

    // updatedTaskData.title = updatedTaskData.title === "" ? previousTaskData.title : updatedTaskData.title;
    // updatedTaskData.description = updatedTaskData.description === "" ? previousTaskData.description : updatedTaskData.description;
    
    if (updatedTaskData.title === "") updatedTaskData.title = previousTaskData.title;
    if (updatedTaskData.description === "") updatedTaskData.description = previousTaskData.description;
    // if (updatedTaskData.address === "") updatedTaskData.address = previousTaskData.address;

    return updatedTaskData;
}

export const tasksService = {
    createTask,
    listTasks,
    listTaskById,
    checkTaskId,
    deleteTask,
    updateTask,
    updatedTaskData
}