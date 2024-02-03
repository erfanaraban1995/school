import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  active: boolean;
}
