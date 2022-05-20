import 'reflect-metadata'

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../infra/prisma/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  
  users: User[] = [];

  async create({ name, email, password, isAdmin }: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, {
      name, email, password, isAdmin
    })

    this.users.push(user)
    return user
  }

  async update({ id, data }: IUpdateUserDTO): Promise<User> {
    throw new Error("Method not implemented.")
  }

  async list(): Promise<User[]> {
    return this.users
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user)=> user.email === email) || null
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user)=> user.id === id) || null
  }
}

export { UsersRepositoryInMemory }