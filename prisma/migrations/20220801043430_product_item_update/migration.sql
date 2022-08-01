/*
  Warnings:

  - You are about to drop the column `colorId` on the `ProductItem` table. All the data in the column will be lost.
  - You are about to drop the column `extraOptionId` on the `ProductItem` table. All the data in the column will be lost.
  - You are about to drop the column `sizeId` on the `ProductItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_colorId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_extraOptionId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_sizeId_fkey";

-- AlterTable
ALTER TABLE "ProductItem" DROP COLUMN "colorId",
DROP COLUMN "extraOptionId",
DROP COLUMN "sizeId",
ADD COLUMN     "color" TEXT,
ADD COLUMN     "extraOption" TEXT,
ADD COLUMN     "size" TEXT;
