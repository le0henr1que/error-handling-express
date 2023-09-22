import { Handler, NextFunction, Request, Response } from "express";

export const handleError = (handlerFn: Handler) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      return await Promise.resolve(handlerFn(request, response, next));
    } catch (e) {
      return next(e);
    }
  };
};
