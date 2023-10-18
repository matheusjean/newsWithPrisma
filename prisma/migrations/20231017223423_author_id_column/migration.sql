/*
  Warnings:

  - You are about to drop the `_NewsToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_NewsToUser" DROP CONSTRAINT "_NewsToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_NewsToUser" DROP CONSTRAINT "_NewsToUser_B_fkey";

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "authorId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_NewsToUser";

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
