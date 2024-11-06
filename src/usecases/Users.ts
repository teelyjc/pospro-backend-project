import { UserUsecases as IUserUsecases,UserRepository, User } from "@/models/Users";

export class UserUsecases implements IUserUsecases {
  private readonly userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async getUsers(offset: number = 0, limit: number = 20): Promise<User[]> {
    const users = await this.userRepository.getUsers(offset, limit);
    return users;
  }

  public async getUserById(id: string): Promise<User | null> {
    const user = await this.userRepository.getUserById(id);
    return user;
  }
}
