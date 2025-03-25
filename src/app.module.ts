import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserSizeModule } from './user-size/user-size.module';
import { ShirtModule } from './shirt/shirt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserSizeModule,
    ShirtModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
