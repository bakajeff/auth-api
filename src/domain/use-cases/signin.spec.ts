import { UserRepositoryInMemory } from "../../../test/repositories/in-memory/user-repository";
import { SignIn } from "./signin";

describe("SingIn", () => {
	it("should call UserRepository with correct values", async () => {
		const userRepository = new UserRepositoryInMemory();
		const userRepositorySpy = jest.spyOn(userRepository, "findUserByUsername");
		const sut = new SignIn(userRepository);
		const username = "any_username";
		const password = "any_password";

		await sut.execute({
			username,
			password,
		});

		expect(userRepositorySpy).toHaveBeenCalledWith(username);
	});
});
