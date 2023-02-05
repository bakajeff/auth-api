import { User } from "src/domain/entities/user";
import { UserRepository } from "src/domain/repositories/user-repository";

const users: User[] = [
	{
		username: "izzy",
		password: "password",
	},
];

export class UserRepositoryInMemory implements UserRepository {
	findUserByUsername(username: string): Promise<User> {
		return Promise.resolve(users.find((user) => user.username === username));
	}
}
