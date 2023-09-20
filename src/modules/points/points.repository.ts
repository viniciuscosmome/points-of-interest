import { Injectable } from '@nestjs/common';

import { handleError } from '../../globals/errors';
import { PrismaService } from '../';
import { PointsOfInterestProps } from './points.types';

@Injectable()
export class PointsRepository {
  constructor(private prisma: PrismaService) {}

  async createPointOfInterest(input: PointsOfInterestProps): Promise<void> {
    await this.prisma.pointsOfInterest
      .create({
        data: {
          name: input.name,
          xCoord: input.xCoord,
          yCoord: input.yCoord,
        },
      })
      .then((response) => !!response)
      .catch((error) => handleError(error));
  }
}
