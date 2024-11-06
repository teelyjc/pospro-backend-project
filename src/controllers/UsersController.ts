import { UserUsecases } from "@/models/Users";
import { Request, Response } from "express";

export class UsersController {
  private readonly userUsecases: UserUsecases;

  public constructor(userUsecases: UserUsecases) {
    this.userUsecases = userUsecases;
  }

  public async getUsers(request: Request, response: Response) {
    const users = await this.userUsecases.getUsers(0, 50);

    response.status(200).json({
      success: true,
      data: {
        users: users
      }
    });
  }

  public async getUserById(request: Request, response: Response) {
    const { id } = request.params;
    const user = await this.userUsecases.getUserById(id);

    response.status(200).json({
      success: true,
      data: {
        user: user,
      }
    });
  }
}
