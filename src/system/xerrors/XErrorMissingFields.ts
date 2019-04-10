export class XErrorMissingFields extends Error {
  status: number;
  message: string;

  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.status = 422;
    this.message = message;
    this.name = this.constructor.name;
  }
}