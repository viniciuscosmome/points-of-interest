import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PointsService } from './points.service';
import { CreatePointOfInterestDto, DeletePointsDto } from './points.dto';
import { CoordinatePipe, DistancePipe } from 'src/utils/pipes/searchPointQuery';

@ApiTags('Handle points')
@Controller('points')
export class PointsController {
  constructor(private pointsService: PointsService) {}

  @Get()
  async getAllPoints() {
    return await this.pointsService.getAllPoints();
  }

  @Get('search')
  async searchPoints(
    @Query('distance', DistancePipe)
    distance: number,

    @Query('xCoord', CoordinatePipe)
    xCoord: number,

    @Query('yCoord', CoordinatePipe)
    yCoord: number,
  ) {
    return await this.pointsService.searchPoints({
      distance,
      xCoord,
      yCoord,
    });
  }

  @Post('creates')
  async createPoint(@Body() input: CreatePointOfInterestDto) {
    await this.pointsService.saveNewPont(input);

    return { message: 'New point of interest created!' };
  }

  @Delete('')
  async excludePoint(@Body() input: DeletePointsDto) {
    await this.pointsService.deletePoints(input.ids);
    return { message: 'Deleted points!' };
  }
}
