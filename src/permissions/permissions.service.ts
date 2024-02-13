import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import {Permission} from "./entities/permission.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class PermissionsService {
  constructor(@InjectRepository(Permission) private permissionRepository: Repository<Permission>) {
  }
  create(createPermissionDto: CreatePermissionDto) {
    return this.permissionRepository.create(createPermissionDto)
  }

  findAll() {
    return this.permissionRepository.find({
      relations: {
        parent: true
      }
    })
  }

  findOne(id: number) {
    return this.permissionRepository.findOneBy({id})
  }
}
