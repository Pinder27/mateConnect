/*
  Warnings:

  - You are about to drop the column `CategoryID` on the `MateDetail` table. All the data in the column will be lost.
  - You are about to drop the column `CategoryID` on the `MatePosting` table. All the data in the column will be lost.
  - Added the required column `CategoryName` to the `MatePosting` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MateDetail" DROP CONSTRAINT "MateDetail_CategoryID_fkey";

-- DropForeignKey
ALTER TABLE "MatePosting" DROP CONSTRAINT "MatePosting_CategoryID_fkey";

-- AlterTable
ALTER TABLE "MateDetail" DROP COLUMN "CategoryID";

-- AlterTable
ALTER TABLE "MatePosting" DROP COLUMN "CategoryID",
ADD COLUMN     "CategoryName" TEXT NOT NULL;
