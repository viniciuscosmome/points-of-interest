import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

import { PORT } from './globals/constants';
import { swaggerDocumentConfig } from './globals/swagger';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);

  app.useGlobalPipes(new ValidationPipe());

  const document = SwaggerModule.createDocument(app, swaggerDocumentConfig);
  SwaggerModule.setup('', app, document);

  await app.listen(PORT, () => {
    console.info(`[ONN] Local port: ${PORT}`);
  });
}

bootstrap();
