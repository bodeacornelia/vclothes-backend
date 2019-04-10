export class XErrorUnautorized extends Error {
  status: number;
  message: string;

  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.status = 401;
    this.message = message;
    this.name = this.constructor.name;
  }
}