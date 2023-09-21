import { PointsOfInterest } from '@prisma/client';

export type CreatePointOfInterestInput = Omit<PointsOfInterest, 'id'>;
