/*
  Warnings:

  - A unique constraint covering the columns `[CategoryName]` on the table `MateCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MateCategory_CategoryName_key" ON "MateCategory"("CategoryName");
