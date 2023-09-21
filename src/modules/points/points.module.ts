import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { PointsController } from './points.controller';
import { PointsService } from './points.service';
import { PointsRepository } from './points.repository';

@Module({
  imports: [PrismaModule],
  controllers: [PointsController],
  providers: [PointsService, PointsRepository],
})
export class PointsModule {}
