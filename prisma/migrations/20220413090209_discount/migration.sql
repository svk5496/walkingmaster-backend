/*
  Warnings:

  - Made the column `dicountRate` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "dicountRate" SET NOT NULL,
ALTER COLUMN "dicountRate" SET DEFAULT 0;
