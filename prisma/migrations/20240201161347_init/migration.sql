/*
  Warnings:

  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_carId_fkey";

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "carId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Cars"("id") ON DELETE SET NULL ON UPDATE CASCADE;
