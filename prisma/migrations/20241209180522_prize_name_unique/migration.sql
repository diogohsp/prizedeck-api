/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `prizes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "prizes_name_key" ON "prizes"("name");
