-- CreateTable
CREATE TABLE "newTable" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roles" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "newTable_pkey" PRIMARY KEY ("id")
);
