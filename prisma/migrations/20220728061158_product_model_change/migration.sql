/*
  Warnings:

  - You are about to drop the column `available` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `caution` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `discountRate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `freeShipping` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `wrranty` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `_FollowRlation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FollowRlation" DROP CONSTRAINT "_FollowRlation_A_fkey";

-- DropForeignKey
ALTER TABLE "_FollowRlation" DROP CONSTRAINT "_FollowRlation_B_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "available",
DROP COLUMN "caution",
DROP COLUMN "discountRate",
DROP COLUMN "freeShipping",
DROP COLUMN "price",
DROP COLUMN "wrranty",
ADD COLUMN     "discountPrice" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "firstOption" TEXT,
ADD COLUMN     "onShowing" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "orginalPrice" INTEGER,
ADD COLUMN     "productSliderImage" TEXT,
ADD COLUMN     "qualityStandard" TEXT,
ADD COLUMN     "rawMaterial" TEXT,
ADD COLUMN     "secondOption" TEXT,
ADD COLUMN     "thirdOption" TEXT,
ADD COLUMN     "ussage" TEXT,
ALTER COLUMN "madeIn" DROP NOT NULL;

-- DropTable
DROP TABLE "_FollowRlation";

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "korName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_username_key" ON "AdminUser"("username");
