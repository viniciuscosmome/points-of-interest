import { Module } from '@nestjs/common';

import { PointsController } from './points.controller';
import { PointsService } from './points.service';
import { PointsRepository } from './points.repository';
import { PrismaModule } from '../';

@Module({
  imports: [PrismaModule],
  controllers: [PointsController],
  providers: [PointsService, PointsRepository],
})
export class PointsModule {}
