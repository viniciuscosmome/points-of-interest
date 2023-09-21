import { Module } from '@nestjs/common';
import { PointsModule } from './modules/points/points.module';

@Module({
  imports: [PointsModule],
})
export class MainModule {}
