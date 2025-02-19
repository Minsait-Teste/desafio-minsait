-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDENTE', 'CONCLUIDA');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
