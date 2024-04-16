/*
  Warnings:

  - Added the required column `Description` to the `FlatMate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `FlatMate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FlatMate" ADD COLUMN     "Description" TEXT NOT NULL,
ADD COLUMN     "Title" TEXT NOT NULL;
