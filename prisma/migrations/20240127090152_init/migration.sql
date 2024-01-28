-- AlterTable
ALTER TABLE "Note" ALTER COLUMN "change_result" SET DEFAULT false,
ALTER COLUMN "read_status" SET DEFAULT false,
ALTER COLUMN "create_by" SET DATA TYPE TEXT;
