import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserSizeModule } from './user-size/user-size.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserSizeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
