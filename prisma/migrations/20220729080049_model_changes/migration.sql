/*
  Warnings:

  - You are about to drop the column `name` on the `Category1` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Category2` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Category3` table. All the data in the column will be lost.
  - Added the required column `category` to the `Category1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Category2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Category3` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_brandId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_productId_fkey";

-- AlterTable
ALTER TABLE "Category1" DROP COLUMN "name",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Category2" DROP COLUMN "name",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Category3" DROP COLUMN "name",
ADD COLUMN     "category" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
