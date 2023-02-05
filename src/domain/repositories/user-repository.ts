import { User } from "../entities/user";

export interface UserRepository {
	findUserByUsername(username: string): Promise<User | null>;
}
