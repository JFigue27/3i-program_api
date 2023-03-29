import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import config from '../config';
import { ConfigType } from '@nestjs/config';

import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controller/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwt_secret,
          signOptions: {
            expiresIn: '8h',
          },
        };
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
