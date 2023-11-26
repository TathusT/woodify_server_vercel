-- CreateEnum
CREATE TYPE "roleEnum" AS ENUM ('USER', 'EXPERT', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusVerifyEnum" AS ENUM ('WAITING_FOR_VERIFICATION', 'PASSED_CERTIFICATION', 'FAILED_CERTIFICATION');

-- CreateTable
CREATE TABLE "Users" (
    "u_id" SERIAL NOT NULL,
    "line_id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "role" "roleEnum" NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("u_id")
);

-- CreateTable
CREATE TABLE "Wood_info" (
    "w_id" SERIAL NOT NULL,
    "common_name" TEXT[],
    "eng_name" TEXT[],
    "botanical_name" TEXT NOT NULL,
    "pedigree" TEXT NOT NULL,
    "place_of_origin" TEXT NOT NULL,
    "wood_characteristics" TEXT NOT NULL,
    "anatomical_characteristics" TEXT NOT NULL,
    "other" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "create_by" INTEGER NOT NULL,
    "update_by" INTEGER NOT NULL,

    CONSTRAINT "Wood_info_pkey" PRIMARY KEY ("w_id")
);

-- CreateTable
CREATE TABLE "Wood_Image" (
    "wi_id" SERIAL NOT NULL,
    "w_id" INTEGER NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Wood_Image_pkey" PRIMARY KEY ("wi_id")
);

-- CreateTable
CREATE TABLE "Manual" (
    "m_id" SERIAL NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "create_by" INTEGER NOT NULL,
    "update_by" INTEGER NOT NULL,

    CONSTRAINT "Manual_pkey" PRIMARY KEY ("m_id")
);

-- CreateTable
CREATE TABLE "Classify" (
    "c_id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "status_verify" "StatusVerifyEnum" NOT NULL,
    "select_result" TEXT NOT NULL,
    "result" JSONB NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,
    "create_by" INTEGER NOT NULL,
    "verify_by" INTEGER NOT NULL,

    CONSTRAINT "Classify_pkey" PRIMARY KEY ("c_id")
);

-- CreateTable
CREATE TABLE "Note" (
    "n_id" SERIAL NOT NULL,
    "c_id" INTEGER NOT NULL,
    "change_result" BOOLEAN NOT NULL,
    "read_status" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,
    "create_by" INTEGER NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("n_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_line_id_key" ON "Users"("line_id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "Users"("phone");

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
