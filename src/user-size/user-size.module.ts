import { Module } from '@nestjs/common';
import { UserSizeService } from './user-size.service';
import { UserSizeController } from './user-size.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [UserSizeController],
  providers: [UserSizeService, PrismaService],
})
export class UserSizeModule {}
