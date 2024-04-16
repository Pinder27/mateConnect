/*
  Warnings:

  - You are about to drop the column `UserName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "UserName",
ALTER COLUMN "BIO" SET DEFAULT '',
ALTER COLUMN "FacebookHandle" SET DEFAULT '',
ALTER COLUMN "Gender" SET DEFAULT '',
ALTER COLUMN "InstagramHandle" SET DEFAULT '',
ALTER COLUMN "LinkedInHandle" SET DEFAULT '',
ALTER COLUMN "Phone" SET DEFAULT '',
ALTER COLUMN "ProfilePic" SET DEFAULT '',
ALTER COLUMN "TwitterHandle" SET DEFAULT '',
ALTER COLUMN "dOB" SET DEFAULT '';
