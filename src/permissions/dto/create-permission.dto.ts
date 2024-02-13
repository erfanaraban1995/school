import { IsBoolean, IsNotEmpty } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreatePermissionDto {

  @ApiProperty({
    example: 'permission',
    required: true
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'endpoint',
    required: true
  })
  @IsNotEmpty()
  endpoint: string;

  @ApiProperty({
    example: true
  })
  @IsBoolean()
  active: boolean;

  @ApiProperty({
    example: null
  })
  parentId: number;
}
