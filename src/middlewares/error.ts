import { Request, Response, NextFunction } from "express";
import { HttpError } from "../utils/error/CustomError";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof HttpError) {

    return res.status(err.statusCode).json({
      error: true,
      message: err.message,
    });
  }

  return res.status(500).json({
    error: true,
    message: "Internal server error",
  });
}
