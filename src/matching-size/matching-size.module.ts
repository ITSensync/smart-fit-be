import { Module } from '@nestjs/common';
import { MatchingSizeService } from './matching-size.service';
import { MatchingSizeController } from './matching-size.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [MatchingSizeController],
  providers: [MatchingSizeService, PrismaService],
})
export class MatchingSizeModule {}
