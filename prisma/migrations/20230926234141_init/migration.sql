/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Block" (
    "blockHash" TEXT NOT NULL,
    "index" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "sequenceNumber" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "previousBlockHash" TEXT NOT NULL,
    "isGenesis" BOOLEAN NOT NULL,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("blockHash")
);
