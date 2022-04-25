/*
  Warnings:

  - You are about to drop the column `decountRate` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "decountRate",
ADD COLUMN     "dicountRate" INTEGER;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "birthDay" SET DATA TYPE TEXT;
