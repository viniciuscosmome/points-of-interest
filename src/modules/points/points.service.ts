import { Injectable } from '@nestjs/common';
import { PointsOfInterest } from '@prisma/client';

import { PointsRepository } from './points.repository';
import { CreatePointOfInterestInput, SearchServiceInput } from './points.types';

@Injectable()
export class PointsService {
  constructor(private pointsRepository: PointsRepository) {}

  private filterPoints(input: {
    points: Array<PointsOfInterest>;
    filter: SearchServiceInput;
  }): Array<PointsOfInterest> {
    const { points, filter } = input;

    const filtrered = points.filter((point) => {
      const x = filter.xCoord - point.xCoord;
      const y = filter.yCoord - point.yCoord;
      const distance = Math.hypot(x, y);

      return distance <= filter.distance;
    });

    return filtrered;
  }

  async saveNewPont(input: CreatePointOfInterestInput): Promise<void> {
    await this.pointsRepository.createPointOfInterest(input);

    return;
  }

  async getAllPoints() {
    const points = this.pointsRepository.getAllPoints() || [];

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
