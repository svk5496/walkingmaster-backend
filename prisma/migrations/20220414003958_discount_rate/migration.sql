/*
  Warnings:

  - You are about to drop the column `dicountRate` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "dicountRate",
ADD COLUMN     "discountRate" INTEGER NOT NULL DEFAULT 0;
