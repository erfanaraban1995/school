import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { DatabaseService } from '../database/database.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.jwt_secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [DatabaseService, UsersService, AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
