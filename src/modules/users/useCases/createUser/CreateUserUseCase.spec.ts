import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe ("Create user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })

  it("should be able to create a new user", async () => {
    const user = await createUserUseCase.execute({
      name: "Test User",
      username: "testuser",
      email: "testuser@gmail.com.br",
      password: "password",
      isAdmin: false
    })

    expect(user).toHaveProperty('id')
  })
})