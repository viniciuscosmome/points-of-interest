import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  Min,
} from 'class-validator';

export class CreatePointOfInterestDto {
  @ApiProperty({ example: 'Aeroporto' })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zÀ-ÿ0-9 ]+$/i)
  name: string;

  @ApiProperty({ example: 14 })
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(0)
  xCoord: number;

  @ApiProperty({ example: 16 })
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(0)
  yCoord: number;
}
