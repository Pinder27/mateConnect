/*
  Warnings:

  - You are about to drop the column `Images` on the `FlatMate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FlatMate" DROP COLUMN "Images";

-- CreateTable
CREATE TABLE "Images" (
    "ID" SERIAL NOT NULL,
    "FlatMateID" INTEGER NOT NULL,
    "Image" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_FlatMateID_fkey" FOREIGN KEY ("FlatMateID") REFERENCES "FlatMate"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
