import { UserData } from "@/types";

export class User {
  public static serialize(result: UserData): User {
    const user = new User();

    user.id = result.id;
    user.username = result.username;
    user.password = result.password;
    user.firstname = result.firstname;
    user.lastname = result.lastname;
    user.profilePath = result.profile_path;
    user.createdAt = new Date(result.created_at);
    user.updatedAt = new Date(result.updated_at);

    return user;
  }

  public id: string = "";
  public username: string = "";
  public password: string = "";
  public firstname: string = "";
  public lastname: string = "";
  public role: Role = Role.Customer;
  public profilePath: string = "";
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
}

export enum Role {
  Customer = "Customer",
  Seller = "Seller",
  Administrator = "Administrator"
}

export interface UserRepository {
  getUserById(id: string): Promise<User | null>;
  getUsers(offset: number, limit: number): Promise<User[]>;
}

export interface UserUsecases {
  getUserById(id: string): Promise<User | null>;
  getUsers(offset: number, limit: number): Promise<User[]>;
}
