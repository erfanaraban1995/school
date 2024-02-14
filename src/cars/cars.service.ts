import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Car} from "./entities/car.entity";
import {Repository} from "typeorm";
import {FilterCarDto} from "./dto/filter-car-dto-ts";

@Injectable()
export class CarsService {
  
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {
  }
  
  
  async create(createCarDto: CreateCarDto) {
    return this.carRepository.save(createCarDto)
  }

  findAll(filter: FilterCarDto) {
    const {name, active} = filter
    const queryBuilder = this.carRepository.createQueryBuilder('cars');
    name && queryBuilder.andWhere('cars.name=:name', { name });
    'active' in filter && queryBuilder.andWhere('cars.active=:active', { active });
    return queryBuilder.getMany()
  }

  findOne(id: number) {
    return this.carRepository.findOneBy({ id });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.carRepository.update({id}, updateCarDto)
  }

  remove(id: number) {
    return this.carRepository.delete(id);
  }
}
