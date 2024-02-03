import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [RolesController],
  providers: [JwtService, RolesService],
})
export class RolesModule {}
