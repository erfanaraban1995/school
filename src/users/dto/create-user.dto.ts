import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  nationalId: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsInt()
  roleId: number;
}
