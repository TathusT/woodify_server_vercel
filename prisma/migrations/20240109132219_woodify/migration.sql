/*
  Warnings:

  - Added the required column `image` to the `Classify` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Classify" DROP CONSTRAINT "Classify_verify_by_fkey";

-- AlterTable
ALTER TABLE "Classify" ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "verify_by" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Classify" ADD CONSTRAINT "Classify_verify_by_fkey" FOREIGN KEY ("verify_by") REFERENCES "Users"("u_id") ON DELETE SET NULL ON UPDATE CASCADE;
