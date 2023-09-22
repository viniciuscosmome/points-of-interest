import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

class ValidateParams {
  public orientation: string;
  public propertyName: string;
  public value: unknown;
  public modified: number;

  public isEmpty() {
    const notEmpty =
      this.value !== '' && this.value !== null && this.value !== undefined;

    if (!notEmpty) {
      this.emptyException();
    }
  }

  public numericString() {
    const notANumber =
      isNaN(this.modified) || typeof this.modified !== 'number';

    if (notANumber) {
      this.numericStringException();
    }
  }

  public positive() {
    const lessThanZero = this.modified < 0;

    if (lessThanZero) {
      this.positiveException();
    }
  }

  private emptyException() {
    throw new BadRequestException(
      `The ${this.orientation} coordinate has not defined. The property name is ${this.propertyName}`,
    );
  }

  private numericStringException() {
    throw new BadRequestException(
      `${this.propertyName} must be a numeric string`,
    );
  }

  private positiveException() {
    throw new BadRequestException(
      `${this.propertyName} must be positive number`,
    );
  }
}

export class SearchPointsPipe extends ValidateParams implements PipeTransform {
  constructor() {
    super();
  }

  transform(value: unknown, metadata: ArgumentMetadata) {
    this.propertyName = metadata.data;
    this.value = value;

    this.isEmpty();

    this.modified = Number(value);
    this.numericString();
    this.positive();

    return this.modified;
  }
}
