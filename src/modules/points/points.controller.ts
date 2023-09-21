import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PointsService } from './points.service';
import { CreatePointOfInterestDto } from './points.dto';

@Controller('point')
export class PointsController {
  constructor(private pointsService: PointsService) {}

  @ApiTags('Handles points')
  @Get('')
  async getAllPoints() {
    return await this.pointsService.getAllPoints();
  }

  @ApiTags('Handles points')
  @Post('creates')
  async createPoint(@Body() input: CreatePointOfInterestDto) {
    await this.pointsService.saveNewPont(input);

    return { message: 'New point of interest created!' };
  }
}
