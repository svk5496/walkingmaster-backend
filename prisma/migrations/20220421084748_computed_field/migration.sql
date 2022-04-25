/*
  Warnings:

  - You are about to drop the column `conditionalShipping` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `freeShipping` on the `Brand` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "conditionalShipping",
DROP COLUMN "freeShipping";
