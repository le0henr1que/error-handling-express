import { Router } from "express";
import { userController } from "./useCase";
import { handleError } from "../../utils/error/handleError";

const user = Router();

user.get(
  "/user",
  handleError((request, response) => {
    return userController.handle(request, response);
  })
);

export { user };
