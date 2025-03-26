import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserSizeModule } from './user-size/user-size.module';
import { ShirtModule } from './shirt/shirt.module';
import { MatchingSizeModule } from './matching-size/matching-size.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserSizeModule,
    ShirtModule,
    MatchingSizeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
