/*
  Warnings:

  - Added the required column `size` to the `ShirtSize` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ShirtSize` ADD COLUMN `size` VARCHAR(191) NOT NULL;
