-- DropForeignKey
ALTER TABLE "MateDetail" DROP CONSTRAINT "MateDetail_PostingID_fkey";

-- AddForeignKey
ALTER TABLE "MateDetail" ADD CONSTRAINT "MateDetail_PostingID_fkey" FOREIGN KEY ("PostingID") REFERENCES "MatePosting"("PostingID") ON DELETE CASCADE ON UPDATE CASCADE;
