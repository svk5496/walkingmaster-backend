/*
  Warnings:

  - Added the required column `name` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Contain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Color" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Contain" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Size" ADD COLUMN     "name" TEXT NOT NULL;
