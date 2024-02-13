import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Role} from "./entities/role.entity";

@Injectable()
export class RolesService {

  constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) {
  }

  async create(createRoleDto: CreateRoleDto) {
    return this.roleRepository.save(createRoleDto)
  }

  async findAll() {
    return this.roleRepository.find({
      relations: {
        user: true
      }
    })
  }

  async findOne(id: number) {
    return this.roleRepository.findOneBy({ id });
  }

  async update(id, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update({id}, updateRoleDto)
  }

  async remove(id: number) {
    return this.roleRepository.delete(id);
  }
}
