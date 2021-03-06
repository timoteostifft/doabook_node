import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO"
import { User } from "../infra/prisma/entities/User"

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>
  update({ id, data }: IUpdateUserDTO): Promise<User>
  list(): Promise<User[]>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
}

export { IUsersRepository }