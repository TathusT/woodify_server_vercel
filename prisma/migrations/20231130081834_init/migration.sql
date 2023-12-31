/*
  Warnings:

  - The primary key for the `Classify` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Manual` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Note` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Wood_Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Wood_info` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Classify" DROP CONSTRAINT "Classify_create_by_fkey";

-- DropForeignKey
ALTER TABLE "Classify" DROP CONSTRAINT "Classify_verify_by_fkey";

-- DropForeignKey
ALTER TABLE "Manual" DROP CONSTRAINT "Manual_create_by_fkey";

-- DropForeignKey
ALTER TABLE "Manual" DROP CONSTRAINT "Manual_update_by_fkey";

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_c_id_fkey";

-- DropForeignKey
ALTER TABLE "Wood_Image" DROP CONSTRAINT "Wood_Image_w_id_fkey";

-- DropForeignKey
ALTER TABLE "Wood_info" DROP CONSTRAINT "Wood_info_create_by_fkey";

-- DropForeignKey
ALTER TABLE "Wood_info" DROP CONSTRAINT "Wood_info_update_by_fkey";

-- AlterTable
ALTER TABLE "Classify" DROP CONSTRAINT "Classify_pkey",
ALTER COLUMN "c_id" DROP DEFAULT,
ALTER COLUMN "c_id" SET DATA TYPE TEXT,
ALTER COLUMN "create_by" SET DATA TYPE TEXT,
ALTER COLUMN "verify_by" SET DATA TYPE TEXT,
ADD CONSTRAINT "Classify_pkey" PRIMARY KEY ("c_id");
DROP SEQUENCE "Classify_c_id_seq";

-- AlterTable
ALTER TABLE "Manual" DROP CONSTRAINT "Manual_pkey",
ALTER COLUMN "m_id" DROP DEFAULT,
ALTER COLUMN "m_id" SET DATA TYPE TEXT,
ALTER COLUMN "create_by" SET DATA TYPE TEXT,
ALTER COLUMN "update_by" SET DATA TYPE TEXT,
ADD CONSTRAINT "Manual_pkey" PRIMARY KEY ("m_id");
DROP SEQUENCE "Manual_m_id_seq";

-- AlterTable
ALTER TABLE "Note" DROP CONSTRAINT "Note_pkey",
ALTER COLUMN "n_id" DROP DEFAULT,
ALTER COLUMN "n_id" SET DATA TYPE TEXT,
ALTER COLUMN "c_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Note_pkey" PRIMARY KEY ("n_id");
DROP SEQUENCE "Note_n_id_seq";

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
ALTER COLUMN "u_id" DROP DEFAULT,
ALTER COLUMN "u_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("u_id");
DROP SEQUENCE "Users_u_id_seq";

-- AlterTable
ALTER TABLE "Wood_Image" DROP CONSTRAINT "Wood_Image_pkey",
ALTER COLUMN "wi_id" DROP DEFAULT,
ALTER COLUMN "wi_id" SET DATA TYPE TEXT,
ALTER COLUMN "w_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Wood_Image_pkey" PRIMARY KEY ("wi_id");
DROP SEQUENCE "Wood_Image_wi_id_seq";

-- AlterTable
ALTER TABLE "Wood_info" DROP CONSTRAINT "Wood_info_pkey",
ALTER COLUMN "w_id" DROP DEFAULT,
ALTER COLUMN "w_id" SET DATA TYPE TEXT,
ALTER COLUMN "create_by" SET DATA TYPE TEXT,
ALTER COLUMN "update_by" SET DATA TYPE TEXT,
ADD CONSTRAINT "Wood_info_pkey" PRIMARY KEY ("w_id");
DROP SEQUENCE "Wood_info_w_id_seq";

-- AddForeignKey
ALTER TABLE "Wood_info" ADD CONSTRAINT "Wood_info_create_by_fkey" FOREIGN KEY ("create_by") REFERENCES "Users"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wood_info" ADD CONSTRAINT "Wood_info_update_by_fkey" FOREIGN KEY ("update_by") REFERENCES "Users"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wood_Image" ADD CONSTRAINT "Wood_Image_w_id_fkey" FOREIGN KEY ("w_id") REFERENCES "Wood_info"("w_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manual" ADD CONSTRAINT "Manual_create_by_fkey" FOREIGN KEY ("create_by") REFERENCES "Users"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manual" ADD CONSTRAINT "Manual_update_by_fkey" FOREIGN KEY ("update_by") REFERENCES "Users"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classify" ADD CONSTRAINT "Classify_create_by_fkey" FOREIGN KEY ("create_by") REFERENCES "Users"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classify" ADD CONSTRAINT "Classify_verify_by_fkey" FOREIGN KEY ("verify_by") REFERENCES "Users"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_c_id_fkey" FOREIGN KEY ("c_id") REFERENCES "Classify"("c_id") ON DELETE RESTRICT ON UPDATE CASCADE;
