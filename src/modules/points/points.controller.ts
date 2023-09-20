import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PointsService } from './points.service';
import { CreatePointOfInterestDto } from './points.dto';

@Controller('point')
export class PointsController {
  constructor(private pointsService: PointsService) {}

  @ApiTags('Handles points')
  @Post('creates')
  async createPoint(@Body() input: CreatePointOfInterestDto) {
    await this.pointsService.saveNewPont(input);

    return { message: 'New point of interest created!' };
  }
}
