/*
  Warnings:

  - You are about to drop the column `name` on the `Color` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Size` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category]` on the table `Category1` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[category]` on the table `Category2` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[category]` on the table `Category3` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[color]` on the table `Color` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[size]` on the table `Size` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `color` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Color" DROP COLUMN "name",
ADD COLUMN     "color" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "name",
ADD COLUMN     "size" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category1_category_key" ON "Category1"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Category2_category_key" ON "Category2"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Category3_category_key" ON "Category3"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Color_color_key" ON "Color"("color");

-- CreateIndex
CREATE UNIQUE INDEX "Size_size_key" ON "Size"("size");
