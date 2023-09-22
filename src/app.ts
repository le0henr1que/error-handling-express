import express, { NextFunction, Request, Response } from "express";
import { user } from "./modules/user/route.user";
import "express-async-errors";
import { error } from "console";
import { HttpError, NotFoundError } from "./utils/error/CustomError";
import { errorMiddleware } from "./middlewares/error";

const app = express();

app.use(express.json());

app.use(user);

app.all("*", (request: Request, response: Response, next: NextFunction) => {
  const error = new NotFoundError(request.originalUrl);
  next(error);
});

app.use(errorMiddleware);

export { app };
