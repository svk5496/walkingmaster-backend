/*
  Warnings:

  - You are about to drop the column `isTwinkle` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "isTwinkle",
ADD COLUMN     "isBlink" BOOLEAN NOT NULL DEFAULT true;
