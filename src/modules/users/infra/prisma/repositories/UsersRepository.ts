import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";
import { prisma } from "../../../../../database/prismaClient"
import { IUpdateUserDTO } from "../../../dtos/IUpdateUserDTO";


class UsersRepository implements IUsersRepository{

  async create({ name, username, email, password, isAdmin }: ICreateUserDTO): Promise<User> {

    const user = await prisma.users.create({
      data: {
        name,
        username,
        email,
        password,
        isAdmin
      }
    })

    return user
  }

  async update(data: IUpdateUserDTO): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async list(): Promise<User[]> {
    const all = await prisma.users.findMany()

    return all
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.users.findFirst({
      where: {
        id
      }
    })
    return user
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await prisma.users.findFirst({
      where: {
        username
      }
    })
    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.users.findFirst({
      where: {
        email
      }
    })
    return user
  }
}

export { UsersRepository }