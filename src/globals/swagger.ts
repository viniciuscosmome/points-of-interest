import { DocumentBuilder } from '@nestjs/swagger';
import { APP_LICENSE, APP_VERSION } from './constants';

export const swaggerDocumentConfig = new DocumentBuilder()
  .setTitle('Points Of Interest')
  .setVersion(APP_VERSION)
  .setLicense(
    `${APP_LICENSE} license`,
    'https://github.com/viniciuscosmome/points-of-interest/blob/main/LICENSE',
  )
  .build();
