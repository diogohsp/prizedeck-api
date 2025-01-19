/*
  Warnings:

  - The `code` column on the `prizes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `prize_code` on the `DatePrize` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "DatePrize" DROP CONSTRAINT "DatePrize_prize_code_fkey";

-- AlterTable
ALTER TABLE "DatePrize" DROP COLUMN "prize_code",
ADD COLUMN     "prize_code" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "prizes" DROP COLUMN "code",
ADD COLUMN     "code" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "prizes_code_key" ON "prizes"("code");

-- AddForeignKey
ALTER TABLE "DatePrize" ADD CONSTRAINT "DatePrize_prize_code_fkey" FOREIGN KEY ("prize_code") REFERENCES "prizes"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
