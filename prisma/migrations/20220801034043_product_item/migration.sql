/*
  Warnings:

  - A unique constraint covering the columns `[productItem]` on the table `ProductItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productItem` to the `ProductItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductItem" ADD COLUMN     "productItem" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductItem_productItem_key" ON "ProductItem"("productItem");
