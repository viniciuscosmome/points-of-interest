import { Injectable } from '@nestjs/common';
import { PrismaService } from '../';

@Injectable()
export class PointsRepository {
  constructor(private prisma: PrismaService) {}
}
