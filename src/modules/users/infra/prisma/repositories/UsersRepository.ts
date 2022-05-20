import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";
import { prisma } from "../../../../../database/prismaClient"
import { IUpdateUserDTO } from "../../../dtos/IUpdateUserDTO";


class UsersRepository implements IUsersRepository{

  private repository: any

  constructor(){
    this.repository = prisma.users
  }
  
  async create({ name, username, email, password, isAdmin }: ICreateUserDTO): Promise<User> {

    const user = await this.repository.create({
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

  async findById(id: string): Promise<any> {
    const user = await this.repository.findFirst({
      where: {
        id
      }
    })
    return user
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findFirst({
      where: {
        username
      }
    })
    return user
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findFirst({
      where: {
        email
      }
    })
    return user
  }
}

export { UsersRepository }