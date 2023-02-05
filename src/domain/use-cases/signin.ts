import { UserRepository } from "../repositories/user-repository";

type Props = {
	username: string;
	password: string;
};

export class SignIn {
	constructor(private readonly userRepository: UserRepository) {}

	async execute({ username, password }: Props) {
		await this.userRepository.findUserByUsername(username);
	}
}
