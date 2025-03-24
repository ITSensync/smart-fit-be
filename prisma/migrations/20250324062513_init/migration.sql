-- CreateTable
CREATE TABLE `UserSize` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `chest_circum` INTEGER NOT NULL,
    `body_length` INTEGER NOT NULL,
    `waist_circum` INTEGER NOT NULL,
    `hip_circum` INTEGER NOT NULL,
    `sleeve_length` INTEGER NOT NULL,
    `shoulder_width` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shirt` (
    `id` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShirtSize` (
    `id` VARCHAR(191) NOT NULL,
    `shirtId` VARCHAR(191) NOT NULL,
    `chest_circum` INTEGER NOT NULL,
    `body_length` INTEGER NOT NULL,
    `waist_circum` INTEGER NOT NULL,
    `hip_circum` INTEGER NOT NULL,
    `sleeve_length` INTEGER NOT NULL,
    `shoulder_width` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ShirtSize` ADD CONSTRAINT `ShirtSize_shirtId_fkey` FOREIGN KEY (`shirtId`) REFERENCES `Shirt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
