import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createCarDto: CreateCarDto) {
    return this.databaseService.cars.create({
      data: createCarDto,
    });
  }

  findAll() {
    return this.databaseService.cars.findMany();
  }

  findOne(id: number) {
    return this.databaseService.cars.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.databaseService.cars.update({
      where: {
        id,
      },
      data: updateCarDto,
    });
  }

  remove(id: number) {
    return this.databaseService.cars.delete({
      where: {
        id,
      },
    });
  }
}
