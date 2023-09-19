import { Module } from '@nestjs/common';
import { PointsModule } from './modules';

@Module({
  imports: [PointsModule],
})
export class MainModule {}
