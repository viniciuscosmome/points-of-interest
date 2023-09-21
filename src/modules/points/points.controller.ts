import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PointsService } from './points.service';
import { CreatePointOfInterestDto } from './points.dto';

@ApiTags('Handle points')
@Controller('points')
export class PointsController {
  constructor(private pointsService: PointsService) {}

  @Get()
  async getAllPoints() {
    return await this.pointsService.getAllPoints();
  }

  @Post('creates')
  async createPoint(@Body() input: CreatePointOfInterestDto) {
    await this.pointsService.saveNewPont(input);

    return { message: 'New point of interest created!' };
  }
}
