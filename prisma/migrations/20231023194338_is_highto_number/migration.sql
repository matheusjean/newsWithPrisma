/*
  Warnings:

  - The `isHighlighted` column on the `News` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "News" DROP COLUMN "isHighlighted",
ADD COLUMN     "isHighlighted" INTEGER;
