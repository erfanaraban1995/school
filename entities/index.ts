import {Car} from './../src/cars/entities/car.entity'
import {User} from "../src/users/entities/user.entity";
import {Role} from "../src/roles/entities/role.entity"
import {Permission} from "../src/permissions/entities/permission.entity";

const entities = [Car, User, Role, Permission]
export {Car, Role, User, Permission};
export default entities;