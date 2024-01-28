-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_create_by_fkey" FOREIGN KEY ("create_by") REFERENCES "Users"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;
