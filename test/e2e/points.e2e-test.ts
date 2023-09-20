import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MainModule } from '../../src/main.module';

describe('AppController (e2e)', () => {
  let server: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MainModule],
    }).compile();

    server = module.createNestApplication();
    await server.init();
  });

  describe('Handles points', () => {
    describe('asd', () => {
      it('/point/creates (POST)', () => {
        return request(server.getHttpServer())
          .post('/point/creates')
          .expect(201)
          .expect(
            JSON.stringify({ message: 'New point of interest created!' }),
          );
      });
    });
  });
});
