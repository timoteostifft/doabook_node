import { hash }  from 'bcrypt'
import { AppError } from "../../../../shared/errors/AppError"
import { User } from '../../infra/prisma/entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  name: string
  username: string
  email: string
  password: string
  isAdmin: boolean
}

class CreateUserUseCase {

  constructor(private usersRepository: IUsersRepository){}

  async execute({name, username, email, password, isAdmin}: IRequest): Promise<User> {

    const userExists = await this.usersRepository.findByUsername(username)

    if (userExists) {
      throw new AppError("User already exists!", 400)
    }
    
    const user = await this.usersRepository.create({name, username, email, password, isAdmin})

    return user
  }
}

export { CreateUserUseCase }