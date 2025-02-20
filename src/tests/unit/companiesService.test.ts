import { jest } from "@jest/globals";
import { tasksService } from "../../services/tasksService.js";
import { tasksRepository } from "../../repositories/tasksRepository.js";

import { CreateTaskData } from "./../../services/tasksService.js"
import prisma from "./../../config/database.js";

describe("tasks Services createTask function tests suite", () => {

    it("should create a task", async () => {
        await prisma.$executeRaw`TRUNCATE TABLE "Task" RESTART IDENTITY`

        const task: CreateTaskData = {
            title: "Titulo da task",
            description: "Descrição da task",
            status: "PENDENTE"
        }

        jest.spyOn(tasksRepository, 'registerTask').mockImplementationOnce((): any => { })

        await tasksService.createTask(task);

        expect(tasksRepository.registerTask).toBeCalled();
    });

    it("should fail to create a task if task already exists", async () => {
        const task: CreateTaskData = {
            title: "Titulo existente",
            description: "Descrição da task",
            status: "PENDENTE"
        };
    
        // Simula um erro ao tentar registrar a task
        jest.spyOn(tasksRepository, 'registerTask').mockRejectedValueOnce(new Error("Task already exists"));
    
        const promise = tasksService.createTask(task);
    
        await expect(promise).rejects.toThrow("Task already exists");
    });
})

describe("tasks Services listTasks function tests suite", () => {

    it("Should list all tasks", async () => {
        const tasks: any = [{
            title: "Titulo 1",
            description: "Descrição da task 1",
            status: "PENDENTE"
        },
        {
            title: "Titulo 2",
            description: "Descrição da task 2",
            status: "PENDENTE"
        }]

        jest.spyOn(tasksRepository, "getAllTasks").mockImplementationOnce(() : any => {
            return tasks
        });

        await tasksService.listTasks();

        expect(tasksRepository.getAllTasks).toBeCalledTimes(1);
    })
})

describe("tasks Services listTask by Id function tests suite", () => {

    it("Should list all tasks", async () => {
        const tasks: any = [{
            title: "Titulo 1",
            description: "Descrição da task 1",
            status: "PENDENTE"
        },
        {
            title: "Titulo 2",
            description: "Descrição da task 2",
            status: "PENDENTE"
        }]

        const taskId = 1;

        jest.spyOn(tasksRepository, "checkTaskById").mockImplementationOnce(() : any => {
            return taskId;
        });

        jest.spyOn(tasksRepository, "checkTaskById").mockImplementationOnce(() : any => {
            return tasks
        });

        await tasksService.listTaskById(taskId);

        expect(tasksRepository.checkTaskById).toBeCalledTimes(2);
    })
})

describe("tasks Services deleteTask function tests suite", () => {

    it("Should delete a task", async () => {
        const taskId = 1;

        jest.spyOn(tasksRepository, "checkTaskById").mockImplementationOnce(() : any => {
            return taskId;
        });
   
        jest.spyOn(tasksRepository, "deleteTaskById").mockImplementationOnce(() : any => {});

        await tasksService.deleteTask(taskId);

        expect(tasksRepository.checkTaskById).toBeCalled();
        expect(tasksRepository.deleteTaskById).toBeCalled();
    });

    it("should fail to delete a task", async () => {

        const taskId = 10;
    
        jest.spyOn(tasksRepository, "checkTaskById").mockImplementationOnce(() : any => {}); // Retorna null para simular que a task não existe
        // jest.spyOn(companiesRepository, "checkCompanyById").mockImplementationOnce(() : any => {});

        const promise = tasksService.deleteTask(taskId);
    
        expect(promise).rejects.toEqual({
            message: "Task not found",
            name: "notFound"
        });
    });
})

describe("task Services updateTask function tests suite", () => {

    it("Should update a task", async () => {
        const task : CreateTaskData = {
            title: "",
            description: "",
            status: "PENDENTE"
        }

        const taskId = 1;

        jest.spyOn(tasksRepository, "checkTaskById").mockImplementationOnce(() : any => {
            return taskId;
        });

        jest.spyOn(tasksRepository, "updateTaskById").mockImplementationOnce(() : any => {});
    
        await tasksService.updateTask(task, taskId);

        expect(tasksRepository.checkTaskById).toBeCalled();
        expect(tasksRepository.updateTaskById).toBeCalled();
    })
})