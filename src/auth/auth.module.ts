import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
// import { DatabaseService } from '../database/database.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/entities/user.entity";
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UsersModule,
    JwtModule.register({
      secret: "secretjwt4565",
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [UsersService, AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
