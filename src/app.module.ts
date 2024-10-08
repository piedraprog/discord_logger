import { Module } from '@nestjs/common';
import { BotModule } from './bot/bot.module';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    BotModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
