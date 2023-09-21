import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
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

  it('Server to be defined', () => {
    expect(server).toBeDefined();
  });
});
