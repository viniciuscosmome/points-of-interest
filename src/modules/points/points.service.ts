import { Injectable } from '@nestjs/common';

import { PointsRepository } from './points.repository';
import { CreatePointOfInterestInput } from './points.types';

@Injectable()
export class PointsService {
  constructor(private pointsRepository: PointsRepository) {}

  async saveNewPont(input: CreatePointOfInterestInput): Promise<void> {
    await this.pointsRepository.createPointOfInterest(input);

    return;
  }
}
