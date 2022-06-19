import { CustomError } from "../interface";

export class UnauthorizedError extends Error implements CustomError {
  public readonly message: string;
  public readonly type: string;
  constructor() {
    super();
    this.type = "UnauthorizedError";
    this.message = "Você não esta logado";
  }
}
