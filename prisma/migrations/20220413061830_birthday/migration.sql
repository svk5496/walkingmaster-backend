/*
  Warnings:

  - The `birthYear` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `birthDay` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthYear",
ADD COLUMN     "birthYear" INTEGER,
DROP COLUMN "birthDay",
ADD COLUMN     "birthDay" INTEGER;
