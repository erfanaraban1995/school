import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserDto: CreateUserDto) {
    return this.databaseService.users.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.databaseService.users.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.users.findUnique({
      where: {
        id,
      },
    });
  }

  async findByNationalId(nationalId: string) {
    console.log(nationalId);
    return this.databaseService.users.findUnique({
      where: {
        nationalId,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.databaseService.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.users.delete({
      where: {
        id,
      },
    });
  }
}
