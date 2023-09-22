import { Handler, NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class HttpError extends Error {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly body: string | any;

  constructor(message: string, statusCode: number, body?: string | any) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
    Error.captureStackTrace(this, this.constructor);

    this.message = message;
    this.statusCode = statusCode;

    //aqui seria o pino
    console.log({
      error: true,
      message: message,
      statusCode: statusCode,
      stack: this.stack,
      body: body,
    });
  }
}

export class NotFoundError extends HttpError {
  constructor(path: string) {
    super(`The requested path ${path} not found!`, StatusCodes.NOT_FOUND);
  }
}

export class ValidateError extends HttpError {
  constructor(body: string | any) {
    super(`Validate error`, StatusCodes.NOT_FOUND, body);
  }
}
