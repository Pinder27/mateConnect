/*
  Warnings:

  - A unique constraint covering the columns `[UserID]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Profile_UserID_key" ON "Profile"("UserID");
