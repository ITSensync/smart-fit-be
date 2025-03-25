import { Module } from '@nestjs/common';
import { ShirtController } from './shirt.controller';
import { ShirtService } from './shirt.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ShirtController],
  providers: [ShirtService, PrismaService],
})
export class ShirtModule {}
