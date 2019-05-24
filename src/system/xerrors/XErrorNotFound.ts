export class XErrorNotFound extends Error {
  status: number;
  message: string;

  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.status = 404
    this.message = message;
    this.name = this.constructor.name;
  }
}