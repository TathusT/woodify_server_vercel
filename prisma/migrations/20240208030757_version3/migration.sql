/*
  Warnings:

  - You are about to drop the column `password` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_username_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "password",
DROP COLUMN "username";

-- CreateTable
CREATE TABLE "Add_Token" (
    "a_id" TEXT NOT NULL,
    "invited_by" TEXT NOT NULL,
    "invited_to" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time_out" TIMESTAMP(3) NOT NULL DEFAULT now() + interval '30 minutes',

    CONSTRAINT "Add_Token_pkey" PRIMARY KEY ("a_id")
);
