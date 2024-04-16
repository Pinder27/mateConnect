/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "BIO" TEXT,
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "FacebookHandle" TEXT,
ADD COLUMN     "Gender" TEXT,
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD COLUMN     "InstagramHandle" TEXT,
ADD COLUMN     "LinkedInHandle" TEXT,
ADD COLUMN     "Name" TEXT NOT NULL,
ADD COLUMN     "Password" TEXT,
ADD COLUMN     "Phone" TEXT,
ADD COLUMN     "ProfilePic" TEXT,
ADD COLUMN     "TwitterHandle" TEXT,
ADD COLUMN     "UserName" TEXT NOT NULL,
ADD COLUMN     "dOB" TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("ID");

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "MatePosting" (
    "PostingID" SERIAL NOT NULL,
    "UserID" INTEGER NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "DatePosted" TIMESTAMP(3) NOT NULL,
    "CategoryID" INTEGER NOT NULL,

    CONSTRAINT "MatePosting_pkey" PRIMARY KEY ("PostingID")
);

-- CreateTable
CREATE TABLE "MateCategory" (
    "CategoryID" SERIAL NOT NULL,
    "CategoryName" TEXT NOT NULL,

    CONSTRAINT "MateCategory_pkey" PRIMARY KEY ("CategoryID")
);

-- CreateTable
CREATE TABLE "MateDetail" (
    "MateDetailID" SERIAL NOT NULL,
    "PostingID" INTEGER NOT NULL,
    "CategoryID" INTEGER NOT NULL,
    "SpecificAttribute" TEXT NOT NULL,
    "Value" TEXT NOT NULL,

    CONSTRAINT "MateDetail_pkey" PRIMARY KEY ("MateDetailID")
);

-- AddForeignKey
ALTER TABLE "MatePosting" ADD CONSTRAINT "MatePosting_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatePosting" ADD CONSTRAINT "MatePosting_CategoryID_fkey" FOREIGN KEY ("CategoryID") REFERENCES "MateCategory"("CategoryID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateDetail" ADD CONSTRAINT "MateDetail_PostingID_fkey" FOREIGN KEY ("PostingID") REFERENCES "MatePosting"("PostingID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateDetail" ADD CONSTRAINT "MateDetail_CategoryID_fkey" FOREIGN KEY ("CategoryID") REFERENCES "MateCategory"("CategoryID") ON DELETE RESTRICT ON UPDATE CASCADE;
