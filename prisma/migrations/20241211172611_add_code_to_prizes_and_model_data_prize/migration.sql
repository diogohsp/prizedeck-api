/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `prizes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `prizes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable

ALTER TABLE "prizes" ADD COLUMN "code" TEXT;

-- CreateTable
CREATE TABLE "DatePrize" (
    "id" TEXT NOT NULL,
    "dateHourPrize" TIMESTAMP(3) NOT NULL,
    "awarded" BOOLEAN NOT NULL DEFAULT false,
    "prize_code" TEXT NOT NULL,

    CONSTRAINT "DatePrize_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "prizes_code_key" ON "prizes"("code");

-- AddForeignKey
ALTER TABLE "DatePrize" ADD CONSTRAINT "DatePrize_prize_code_fkey" FOREIGN KEY ("prize_code") REFERENCES "prizes"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
