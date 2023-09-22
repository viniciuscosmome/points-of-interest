import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PointsService } from './points.service';
import { CreatePointOfInterestDto, DeletePointsDto } from './points.dto';
import { SearchPointsPipe } from 'src/utils/pipes/searchPointQuery';

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
    @Query('distance', SearchPointsPipe)
    distance: number,

    @Query('xCoord', SearchPointsPipe)
    xCoord: number,

    @Query('yCoord', SearchPointsPipe)
    yCoord: number,
  ) {
    return await this.pointsService.searchPoints({
      distance,
      xCoord,
      yCoord,
    });
  }

  @Post('')
  async createPoint(@Body() input: CreatePointOfInterestDto) {
    await this.pointsService.saveNewPoint(input);

    return { message: 'New point of interest created!' };
  }

  @Delete('')
  async excludePoint(@Body() input: DeletePointsDto) {
    await this.pointsService.deletePoints(input.ids);
    return { message: 'Deleted points!' };
  }
}
