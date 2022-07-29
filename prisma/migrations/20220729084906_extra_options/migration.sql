-- AlterTable
ALTER TABLE "ProductItem" ADD COLUMN     "extraOptionId" INTEGER;

-- CreateTable
CREATE TABLE "ExtraOption" (
    "id" SERIAL NOT NULL,
    "extraOption" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExtraOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ExtraOptionToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ExtraOption_extraOption_key" ON "ExtraOption"("extraOption");

-- CreateIndex
CREATE UNIQUE INDEX "_ExtraOptionToProduct_AB_unique" ON "_ExtraOptionToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_ExtraOptionToProduct_B_index" ON "_ExtraOptionToProduct"("B");

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_extraOptionId_fkey" FOREIGN KEY ("extraOptionId") REFERENCES "ExtraOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExtraOptionToProduct" ADD FOREIGN KEY ("A") REFERENCES "ExtraOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExtraOptionToProduct" ADD FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
