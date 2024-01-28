/*
  Warnings:

  - Added the required column `session_id_note_room` to the `Classify` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Classify" ADD COLUMN     "session_id_note_room" TEXT NOT NULL;
