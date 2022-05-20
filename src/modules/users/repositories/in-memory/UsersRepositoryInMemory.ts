import 'reflect-metadata'

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../infra/prisma/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  
  users: User[] = [];

  async create({ name, username, email, password, isAdmin }: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, {
      name, username, email, password, isAdmin
    })

    this.users.push(user)
    return user
  }

  async update({ name, email, password }: IUpdateUserDTO): Promise<User> {
    throw new Error("Method not implemented.")
  }

  async list(): Promise<User[]> {
    return this.users
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.users.find((user)=> user.username === username) || null
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user)=> user.email === email) || null
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user)=> user.id === id) || null
  }
}

export { UsersRepositoryInMemory }