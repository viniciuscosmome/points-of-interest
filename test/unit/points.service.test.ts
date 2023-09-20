import { Test, TestingModule } from '@nestjs/testing';

import { PointsService } from 'src/modules/points/points.service';
import { PointsRepository } from 'src/modules/points/points.repository';

describe('Points service', () => {
  let service: PointsService;

  beforeEach(async () => {
    const points: TestingModule = await Test.createTestingModule({
      providers: [
        PointsService,
        {
          provide: PointsRepository,
          useValue: {},
        },
      ],
    }).compile();

    service = points.get<PointsService>(PointsService);
  });

  it('Service to be defined', () => {
    expect(service).toBeDefined();
  });
});
