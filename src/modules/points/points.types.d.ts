import { PointsOfInterest } from '@prisma/client';

export type CreatePointOfInterestInput = Omit<PointsOfInterest, 'id'>;
export type SearchServiceInput = Pick<PointsOfInterest, 'xCoord' | 'yCoord'> & {
  distance: number;
};
export type SearchRepositoryInput = {
  top: number;
  bottom: number;
  right: number;
  left: number;
};
export type FindPointsInput = {
  points: Array<PointsOfInterest>;
  filter: SearchServiceInput;
};
