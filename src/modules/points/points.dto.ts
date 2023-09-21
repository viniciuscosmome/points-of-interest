import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
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

export class DeletePointsDto {
  @ApiProperty({ example: ['0fdd1388-1333-4a6d-98e1-4a857c5c986f'] })
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  ids: Array<string>;
}
