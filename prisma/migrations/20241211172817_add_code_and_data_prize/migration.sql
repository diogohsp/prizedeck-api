/*
  Warnings:

  - Made the column `code` on table `prizes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "prizes" ALTER COLUMN "code" SET NOT NULL;
