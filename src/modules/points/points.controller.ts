import { Controller, Get } from '@nestjs/common';

import { PointsService } from './points.service';

@Controller('/')
export class PointsController {
  constructor(private pointsService: PointsService) {}

  @Get()
  async hello() {
    return 'Hello World!';
  }
}
