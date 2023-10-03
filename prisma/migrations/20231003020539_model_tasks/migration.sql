-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "taskName" TEXT NOT NULL,
    "taskDescription" TEXT NOT NULL,
    "subTasks" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "priority" TEXT NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientSurName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "clientPhone" TEXT NOT NULL,
    "clientCountry" TEXT NOT NULL,
    "clientState" TEXT NOT NULL,
    "clientCity" TEXT NOT NULL,
    "clientAddress" TEXT NOT NULL,
    "clientCep" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_clientEmail_key" ON "Client"("clientEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Client_clientPhone_key" ON "Client"("clientPhone");
