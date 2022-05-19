/*
  Warnings:

  - Added the required column `keyValue` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isTwinkle` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "keyValue" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "comment1" TEXT,
ADD COLUMN     "comment2" TEXT,
ADD COLUMN     "comment3" TEXT,
ADD COLUMN     "comment4" TEXT,
ADD COLUMN     "isTwinkle" BOOLEAN NOT NULL,
ADD COLUMN     "picAfter" TEXT,
ADD COLUMN     "picBefore" TEXT;
