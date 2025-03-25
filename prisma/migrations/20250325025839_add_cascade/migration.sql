-- DropForeignKey
ALTER TABLE `ShirtSize` DROP FOREIGN KEY `ShirtSize_shirtId_fkey`;

-- DropIndex
DROP INDEX `ShirtSize_shirtId_fkey` ON `ShirtSize`;

-- AddForeignKey
ALTER TABLE `ShirtSize` ADD CONSTRAINT `ShirtSize_shirtId_fkey` FOREIGN KEY (`shirtId`) REFERENCES `Shirt`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
