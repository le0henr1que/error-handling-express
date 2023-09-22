import { UserController } from "./UserController";
import { UserUseCase } from "./UserUseCase";

const userUseCase = new UserUseCase();
const userController = new UserController(userUseCase);

export { userUseCase, userController };
