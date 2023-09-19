import { Module } from '@nestjs/common';

import { PointsController } from './points.controller';
import { PointsService } from './points.service';
import { PrismaModule } from '../';

@Module({
  imports: [PrismaModule],
  controllers: [PointsController],
  providers: [PointsService],
})
export class PointsModule {}
