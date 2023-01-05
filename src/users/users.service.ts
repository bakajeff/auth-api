import { Injectable } from "@nestjs/common";
import { User } from "src/application/entities/user";

@Injectable()
export class UsersService {
	private readonly users = [
		new User({
			username: "john",
			password: "password",
		}),
		new User({
			username: "maria",
			password: "password",
		}),
	];

	async findOne(username: string): Promise<User | undefined> {
		return this.users.find((user) => user.username === username);
	}
}
