import { Injectable } from '@nestjs/common';

import { PointsRepository } from './points.repository';
import { PointsOfInterestProps } from './points.types';

@Injectable()
export class PointsService {
  constructor(private pointsRepository: PointsRepository) {}

  async saveNewPont(input: PointsOfInterestProps): Promise<void> {
    await this.pointsRepository.createPointOfInterest(input);

    return;
  }
}
