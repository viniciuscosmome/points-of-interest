import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerDocumentConfig = new DocumentBuilder()
  .setTitle('Points Of Interest')
  .setVersion('0.0.1')
  .setLicense(
    'MIT license',
    'https://github.com/viniciuscosmome/points-of-interest/blob/main/LICENSE',
  )
  .build();
