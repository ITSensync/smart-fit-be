import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserSizeModule } from './user-size/user-size.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserSizeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
