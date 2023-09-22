import { UserDTO } from "./UserDTO";

export class UserUseCase {
  constructor() {}

  async execute(): Promise<UserDTO> {
    return {
      name: "Leonardo Henrique",
      age: 22,
      phone: "11 993074751",
    };
  }
}
