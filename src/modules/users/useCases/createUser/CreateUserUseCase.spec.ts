import { AppError } from "../../../../shared/errors/AppError";
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
    
    const user = {
      name: "Test User",
      username: "testuser",
      email: "testuser@gmail.com.br",
      password: "password",
      isAdmin: false
    }
    
    await createUserUseCase.execute(user)

    const userByEmail = await usersRepositoryInMemory.findByEmail(user.email)

    expect(userByEmail).toHaveProperty('id')
  })

  it("should not be able to create a user that already exists", async () => {
    expect( async () => {

      const user = {
        name: "Test User",
        username: "testuser",
        email: "testuser@gmail.com.br",
        password: "password",
        isAdmin: false
      }

      await createUserUseCase.execute(user)
      await createUserUseCase.execute(user)
    }).rejects.toBeInstanceOf(AppError);
  })
})