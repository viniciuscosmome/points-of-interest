import { Test, TestingModule } from '@nestjs/testing';

import { PointsService } from 'src/modules/points/points.service';
import { PointsRepository } from 'src/modules/points/points.repository';
import {
  fourPointsExpected,
  getAPointInput,
  getFourPointsInput,
  listOfPointsOfInterest,
  singlePointExpected,
} from 'test/stubs/points';

describe('Points service', () => {
  let service: PointsService;

  beforeEach(async () => {
    const points: TestingModule = await Test.createTestingModule({
      providers: [
        PointsService,
        {
          provide: PointsRepository,
          useValue: {
            getApproximatePoints: jest
              .fn()
              .mockReturnValue(listOfPointsOfInterest),
          },
        },
      ],
    }).compile();

    service = points.get<PointsService>(PointsService);
  });

  it('Service to be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Find points', () => {
    it('Happy path - returns four points', async () => {
      const actual = await service.searchPoints(getFourPointsInput);

      expect(actual).toBeInstanceOf(Array);
      expect(actual.length < listOfPointsOfInterest.length).toBeTruthy();
      expect(actual.length).toStrictEqual(4);

      expect(fourPointsExpected.some((id) => id === actual[0].id)).toBeTruthy();
      expect(fourPointsExpected.some((id) => id === actual[1].id)).toBeTruthy();
      expect(fourPointsExpected.some((id) => id === actual[2].id)).toBeTruthy();
      expect(fourPointsExpected.some((id) => id === actual[3].id)).toBeTruthy();
    });

    it('Happy path - returns a single point', async () => {
      const actual = await service.searchPoints(getAPointInput);

      expect(actual).toBeInstanceOf(Array);
      expect(actual.length < listOfPointsOfInterest.length).toBeTruthy();
      expect(actual.length).toStrictEqual(1);
      expect(actual[0].id).toStrictEqual(singlePointExpected);
    });
  });
});
