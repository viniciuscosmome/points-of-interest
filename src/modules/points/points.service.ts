import { Injectable } from '@nestjs/common';
import { PointsOfInterest } from '@prisma/client';

import { PointsRepository } from './points.repository';
import {
  CreatePointOfInterestInput,
  FindPointsInput,
  SearchServiceInput,
} from './points.types';

@Injectable()
export class PointsService {
  constructor(private pointsRepository: PointsRepository) {}

  private filterPoints(input: FindPointsInput): Array<PointsOfInterest> {
    const { points, filter } = input;

    const filtered = points.filter((point) => {
      const x = filter.xCoord - point.xCoord;
      const y = filter.yCoord - point.yCoord;
      const distance = Math.hypot(x, y);

      return distance <= filter.distance;
    });

    return filtered;
  }

  async saveNewPoint(input: CreatePointOfInterestInput): Promise<void> {
    await this.pointsRepository.createPointOfInterest(input);
  }

  async getAllPoints() {
    const points = (await this.pointsRepository.getAllPoints()) || [];

    return points;
  }

  async searchPoints(
    input: SearchServiceInput,
  ): Promise<Array<PointsOfInterest>> {
    const { distance, xCoord, yCoord } = input;
    const top = yCoord + distance;
    const right = xCoord + distance;
    let bottom = yCoord - distance;
    let left = xCoord - distance;

    if (bottom < 0) bottom = 0;
    if (left < 0) left = 0;

    const approximatePoints =
      (await this.pointsRepository.getApproximatePoints({
        top,
        bottom,
        left,
        right,
      })) || [];

    return this.filterPoints({
      points: approximatePoints,
      filter: input,
    });
  }

  async deletePoints(ids: Array<PointsOfInterest['id']>) {
    await this.pointsRepository.deletePointsById(ids);
  }
}
