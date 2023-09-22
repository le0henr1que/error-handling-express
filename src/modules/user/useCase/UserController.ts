import { Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";
import { HttpError, ValidateError } from "../../../utils/error/CustomError";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.userUseCase = userUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const user = await this.userUseCase.execute();
    console.log(user);

    throw new ValidateError(user);

    return response.status(200).send({ error: false, user });
  }
}
