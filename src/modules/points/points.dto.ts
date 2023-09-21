import { ApiProperty } from '@nestjs/swagger';
import { PointsOfInterest } from '@prisma/client';
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
  @Matches(/^[a-zÀ-ÿ0-9 ]+$/i)
  name: PointsOfInterest['name'];

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(0)
  xCoord: PointsOfInterest['xCoord'];

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(0)
  yCoord: PointsOfInterest['yCoord'];
}
