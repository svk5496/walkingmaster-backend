/*
  Warnings:

  - You are about to drop the column `keyName` on the `Answer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "keyName";

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "keyName" TEXT NOT NULL DEFAULT E'KEY_NULL';
