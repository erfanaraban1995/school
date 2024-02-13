import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  async findAll() {
    return this.userRepository.find({
      relations: {
        car: true,
        role: true
      }
    })
  }

  async findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async findByNationalId(nationalId: string) {
    return this.userRepository.findOneBy({ nationalId });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({id}, updateUserDto)
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }
}
