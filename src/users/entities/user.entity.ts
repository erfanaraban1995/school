import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn, JoinTable, ManyToMany,
  ManyToOne,
  OneToMany, OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {Car} from "../../cars/entities/car.entity";
import {Role} from "../../roles/entities/role.entity";

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id"
  })
  id: number;

  @Column({
    nullable: true
  })
  firstName: string;

  @Column({
    nullable: true
  })
  lastName: string;

  @Column({
    nullable: false,
    unique: true
  })
  nationalId: string;

  @CreateDateColumn({
    nullable: false,
    name: 'createdAt'
  })
  createdAt: Date;

  @UpdateDateColumn({
    nullable: false,
    name: 'updatedAt'
  })
  updatedAt: Date;

  @Column({
    default: 1
  })
  active: boolean;

  @Column({
    nullable: false
  })
  password: string;


  @ManyToOne(() => Car, (car) => car.user)
  @JoinColumn({
    name: 'carId'
  })
  car: Car

  @ManyToMany(() => Role, (role) => role.user)
  @JoinTable()
  role: Role[]
}
