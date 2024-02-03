import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private readonly dataBaseService: DatabaseService) {}

  async create(createRoleDto: CreateRoleDto) {
    return this.dataBaseService.roles.create({
      data: createRoleDto,
    });
  }

  async findAll() {
    return this.dataBaseService.roles.findMany();
  }

  async findOne(id: number) {
    return this.dataBaseService.roles.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.dataBaseService.roles.update({
      where: {
        id,
      },
      data: updateRoleDto,
    });
  }

  async remove(id: number) {
    return this.dataBaseService.roles.delete({
      where: {
        id,
      },
    });
  }
}
