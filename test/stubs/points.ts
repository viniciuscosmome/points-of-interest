import { PointsOfInterest } from '@prisma/client';
import { SearchServiceInput } from 'src/modules/points/points.types';

export const getFourPointsInput: SearchServiceInput = {
  distance: 10,
  xCoord: 20,
  yCoord: 10,
};

export const fourPointsExpected: Array<PointsOfInterest['id']> = [
  '8fdd1388-1333-4a6d-98e1-4a857c5c986f',
  '85385068-5e0b-4b4b-907e-a75109537365',
  '6ab7c95f-d573-48aa-8668-b89386c8256b',
  'b0192ffe-c9cf-488a-a8b2-ddb80b29c7fb',
];

export const getAPointInput: SearchServiceInput = {
  distance: 3,
  xCoord: 18,
  yCoord: 19,
};

export const singlePointExpected: PointsOfInterest['id'] =
  'b9a73c2e-eb18-4c65-803e-fd1c92deb96b';

export const listOfPointsOfInterest: Array<PointsOfInterest> = [
  {
    id: '8fdd1388-1333-4a6d-98e1-4a857c5c986f',
    name: 'Lanchonete',
    xCoord: 27,
    yCoord: 12,
  },
  {
    id: '553290c4-4349-45d4-91ac-a2be3a632943',
    name: 'Posto',
    xCoord: 31,
    yCoord: 18,
  },
  {
    id: '85385068-5e0b-4b4b-907e-a75109537365',
    name: 'Joalheria',
    xCoord: 15,
    yCoord: 12,
  },
  {
    id: 'b9a73c2e-eb18-4c65-803e-fd1c92deb96b',
    name: 'Floricultura',
    xCoord: 19,
    yCoord: 21,
  },
  {
    id: '6ab7c95f-d573-48aa-8668-b89386c8256b',
    name: 'Pub',
    xCoord: 12,
    yCoord: 8,
  },
  {
    id: 'b0192ffe-c9cf-488a-a8b2-ddb80b29c7fb',
    name: 'Supermercado',
    xCoord: 23,
    yCoord: 6,
  },
  {
    id: '0ea17d5e-08cd-430f-bfad-6dc76200eff0',
    name: 'Churrascaria',
    xCoord: 28,
    yCoord: 2,
  },
];
