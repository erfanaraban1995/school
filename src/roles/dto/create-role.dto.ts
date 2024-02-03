import { IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    example: 'role',
    required: true,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: true,
  })
  @IsBoolean()
  active: boolean;
}
