import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, TreeChildren, TreeParent} from "typeorm";
import {Role} from "../../roles/entities/role.entity";

@Entity({name: 'permissions'})
export class Permission {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: "int"
  })
  id: number;

  @Column()
  name: string

  @Column({
    unique: true
  })
  endpoint: string

  @Column({
    default: true
  })
  active: boolean;

  @ManyToMany(() => Role, (role) => role.permissions )
  role: Role[]

  @TreeParent()
  parent: Permission;

  @TreeChildren()
  children: Permission[];
}
