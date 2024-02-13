import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import {SkipAuth} from "../decorators/skipAuth";
import {ApiTags} from "@nestjs/swagger";

@SkipAuth()
@ApiTags('Permissions')
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(+id);
  }

}
