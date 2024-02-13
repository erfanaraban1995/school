import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";
import {Permission} from "../../permissions/entities/permission.entity";

@Entity({name: 'roles'})
export class Role {
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

  @ManyToMany(() => User, (user) => user.role)
  user: User[]

  @ManyToMany(() => Permission, (permission) => permission.role)
  @JoinTable()
  permissions: Permission[]
}
