import { Injectable } from '@nestjs/common';
import { PointsOfInterest } from '@prisma/client';

import { handleError } from 'src/globals/errors';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import {
  CreatePointOfInterestInput,
  SearchRepositoryInput,
} from './points.types';

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

  async getAllPoints(): Promise<Array<PointsOfInterest> | void> {
    const points = await this.prisma.pointsOfInterest
      .findMany()
      .then((points) => points)
      .catch((error) => handleError(error));

    return points;
  }

  async getApproximatePoints(
    input: SearchRepositoryInput,
  ): Promise<Array<PointsOfInterest>> {
    const points = await this.prisma.pointsOfInterest
      .findMany({
        where: {
          AND: [
            {
              xCoord: {
                gte: input.left,
                lte: input.right,
              },
            },
            {
              yCoord: {
                gte: input.bottom,
                lte: input.top,
              },
            },
          ],
        },
      })
      .then((response) => response)
      .catch((error) => handleError(error));

    return points as Array<PointsOfInterest>;
  }

  async deletePointsById(ids: Array<PointsOfInterest['id']>): Promise<void> {
    await this.prisma.pointsOfInterest
      .deleteMany({
        where: {
          id: {
            in: ids,
          },
        },
      })
      .catch((error) => handleError(error));
  }
}
