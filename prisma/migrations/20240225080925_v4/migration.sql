-- CreateEnum
CREATE TYPE "statusEnum" AS ENUM ('ACTIVE', 'BAN', 'DELETE');

-- AlterTable
ALTER TABLE "Add_Token" ALTER COLUMN "time_out" SET DEFAULT now() + interval '30 minutes';

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "status" "statusEnum" NOT NULL DEFAULT 'ACTIVE';
