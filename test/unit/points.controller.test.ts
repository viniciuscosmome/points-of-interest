import { Test, TestingModule } from '@nestjs/testing';
import { PointsController } from 'src/modules/points/points.controller';
import { PointsService } from 'src/modules/points/points.service';

describe('PointsController', () => {
  let pointsController: PointsController;

  beforeEach(async () => {
    const points: TestingModule = await Test.createTestingModule({
      controllers: [PointsController],
      providers: [PointsService],
    }).compile();

    pointsController = points.get<PointsController>(PointsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await pointsController.hello()).toBe('Hello World!');
    });
  });
});
