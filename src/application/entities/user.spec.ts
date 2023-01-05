import { User } from "./user";

describe("User", () => {
  it("should be able to create a user", () => {
    const user = new User({
      username: "john",
      password: "password",
    });

    expect(user).toBeTruthy();
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('password');
  });
});