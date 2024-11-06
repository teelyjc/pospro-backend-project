import { UserRepository as IUserRepository, User } from "@/models/Users";
import { UserData } from "@/types.d";
import { Pool } from "mysql2/promise";

export class UserRepository implements IUserRepository {
  private readonly conn: Pool;

  public constructor(connection: Pool) {
    this.conn = connection;
  }

  public async getUserById(id: string): Promise<User | null> {
    const [results] = await this.conn.query<UserData[]>(
      "SELECT users.* FROM users WHERE id = ? LIMIT 1", [id]);
    if (results.length <= 0) {
      throw new Error("User's result is empty.");
    }

    const user = User.serialize(results[0]);

    return user;
  }

  public async getUsers(offset: number = 0, limit: number = 20): Promise<User[]> {
    const [results] = await this.conn.query<UserData[]>(
      "SELECT users.* FROM users LIMIT ? OFFSET ?", [limit, offset]
    );

    const users: Array<User> = new Array();

    results.forEach((user) => {
      users.push(User.serialize(user));
    });

    return users;
  }
}
