-- AlterTable
ALTER TABLE "Add_Token" ALTER COLUMN "time_out" SET DEFAULT now() + interval '30 minutes';
