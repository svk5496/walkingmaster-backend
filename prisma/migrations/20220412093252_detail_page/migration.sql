-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "detailPage1" TEXT NOT NULL DEFAULT E'null',
ADD COLUMN     "detailPage2" TEXT NOT NULL DEFAULT E'null',
ADD COLUMN     "thumbnail" TEXT NOT NULL DEFAULT E'null';
