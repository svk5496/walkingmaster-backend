/*
  Warnings:

  - You are about to drop the column `bramdId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `companyName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `companyRegistrationNumber` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `cs` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `tongsinNumber` on the `Product` table. All the data in the column will be lost.
  - Added the required column `companyName` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyRegistrationNumber` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cs` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tongsinNumber` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Category1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Category2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Category3` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "companyRegistrationNumber" TEXT NOT NULL,
ADD COLUMN     "cs" TEXT NOT NULL,
ADD COLUMN     "tongsinNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Category1" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Category2" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Category3" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "bramdId",
DROP COLUMN "companyName",
DROP COLUMN "companyRegistrationNumber",
DROP COLUMN "cs",
DROP COLUMN "tongsinNumber",
ADD COLUMN     "brandId" INTEGER NOT NULL,
ALTER COLUMN "best" SET DEFAULT false,
ALTER COLUMN "onSale" SET DEFAULT false,
ALTER COLUMN "available" SET DEFAULT false,
ALTER COLUMN "freeShipping" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Hashtag" (
    "id" SERIAL NOT NULL,
    "hashtag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandLike" (
    "id" SERIAL NOT NULL,
    "brandId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BrandLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductLike" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HashtagToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Hashtag_hashtag_key" ON "Hashtag"("hashtag");

-- CreateIndex
CREATE UNIQUE INDEX "BrandLike_brandId_userId_key" ON "BrandLike"("brandId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductLike_productId_userId_key" ON "ProductLike"("productId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "_HashtagToProduct_AB_unique" ON "_HashtagToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_HashtagToProduct_B_index" ON "_HashtagToProduct"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandLike" ADD CONSTRAINT "BrandLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandLike" ADD CONSTRAINT "BrandLike_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLike" ADD CONSTRAINT "ProductLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLike" ADD CONSTRAINT "ProductLike_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HashtagToProduct" ADD FOREIGN KEY ("A") REFERENCES "Hashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HashtagToProduct" ADD FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
