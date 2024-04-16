/*
  Warnings:

  - You are about to drop the column `BIO` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `FacebookHandle` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `InstagramHandle` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `LinkedInHandle` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ProfilePic` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `TwitterHandle` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `dOB` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MatePosting" ALTER COLUMN "DatePosted" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "BIO",
DROP COLUMN "FacebookHandle",
DROP COLUMN "Gender",
DROP COLUMN "InstagramHandle",
DROP COLUMN "LinkedInHandle",
DROP COLUMN "Phone",
DROP COLUMN "ProfilePic",
DROP COLUMN "TwitterHandle",
DROP COLUMN "dOB";

-- CreateTable
CREATE TABLE "Profile" (
    "ProfileID" SERIAL NOT NULL,
    "UserID" INTEGER NOT NULL,
    "BIO" TEXT DEFAULT '',
    "dOB" TEXT DEFAULT '',
    "ProfilePic" TEXT DEFAULT '',
    "Gender" TEXT DEFAULT '',
    "Phone" TEXT DEFAULT '',
    "FacebookHandle" TEXT DEFAULT '',
    "TwitterHandle" TEXT DEFAULT '',
    "InstagramHandle" TEXT DEFAULT '',
    "LinkedInHandle" TEXT DEFAULT '',

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("ProfileID")
);

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
