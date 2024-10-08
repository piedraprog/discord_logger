import { Logger, Module } from '@nestjs/common';
import { MessageController } from './loggin/infrastructure/controllers/message.controller';
import { botMessage } from 'src/bot/events/message';
import { JwtStrategy } from './loggin/strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/infrastructure/controllers/auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { algorithm: 'HS384' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    botMessage,
    JwtStrategy,
    Logger
  ],
  controllers: [
    MessageController,
    AuthController
  ],
})
export class ApiModule { }
