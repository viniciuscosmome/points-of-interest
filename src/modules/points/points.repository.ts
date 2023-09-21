import { Injectable } from '@nestjs/common';

import { handleError } from 'src/globals/errors';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreatePointOfInterestInput } from './points.types';

@Injectable()
export class PointsRepository {
  constructor(private prisma: PrismaService) {}

  async createPointOfInterest(
    input: CreatePointOfInterestInput,
  ): Promise<void> {
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
