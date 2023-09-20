import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

const devMode = process.env.NODE_ENV === 'development';

export function prismaKnownRequestErrors(
  error: Prisma.PrismaClientKnownRequestError,
) {
  const target = (error.meta?.target as Array<string>) || ['unknown_meta'];

  switch (error.code) {
    case 'P2002':
      throw new BadRequestException(
        `The ${target} provided is already in use, create a new one`,
      );
    default:
      console.info(`KnownRequestError: ${error.code}.`);
      break;
  }
}

export function prismaUnknownRequestErrors(
  error: Prisma.PrismaClientUnknownRequestError,
) {
  if (devMode) {
    console.info('prismaUnknownRequestErrors', error);
  }

  throw new InternalServerErrorException('Unknown request error');
}

export function unknownError(error: unknown) {
  if (devMode) {
    console.info('Unknown error', error);
  }

  throw new InternalServerErrorException('Error performing the action');
}

export function handleError(error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    prismaKnownRequestErrors(error);
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    prismaUnknownRequestErrors(error);
  }

  unknownError(error);
}
