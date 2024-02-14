import {IsOptional} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
export class FilterCarDto{
  @ApiProperty({
    example: 'car',
    required: false
  })
  name?: string

  @ApiProperty({
    example: true,
    required: false
  })
  @IsOptional()
  active?: boolean

  @IsOptional()
  page?: number

  @IsOptional()
  size?: number
}