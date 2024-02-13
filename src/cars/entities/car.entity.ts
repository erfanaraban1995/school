import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";

@Entity({name: 'cars'})
export class Car {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @Column({
    nullable: false
  })
  name: string;

  @Column({
    default: 1
  })
  active: boolean;

  @OneToMany(() => User, (user) => user.car)
  user: User[]

}
