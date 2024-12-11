/*
  Warnings:

  - A unique constraint covering the columns `[dateHourPrize]` on the table `DatePrize` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DatePrize_dateHourPrize_key" ON "DatePrize"("dateHourPrize");
