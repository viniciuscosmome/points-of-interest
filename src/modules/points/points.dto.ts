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
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zÀ-ÿ0-9 _-]+$/i)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(0)
  xCoord: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(0)
  yCoord: number;
}
