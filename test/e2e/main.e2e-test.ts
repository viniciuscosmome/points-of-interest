import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MainModule } from '../../src/main.module';

describe('AppController (e2e)', () => {
  let main: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MainModule],
    }).compile();

    main = moduleFixture.createNestApplication();
    await main.init();
  });

  it('/ (GET)', () => {
    return request(main.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
