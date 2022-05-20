import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../repositories/IUsersRepository'

import { AppError } from "../../../../shared/errors/AppError"
import { hash }  from 'bcrypt'


interface IRequest {
  name: string
  username: string
  email: string
  password: string
  isAdmin: boolean
}

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository){}

  async execute({name, username, email, password, isAdmin}: IRequest): Promise<void> {

    const userExists = await this.usersRepository.findByUsername(username)

    if (userExists) {
      throw new AppError("User already exists!", 400)
    }
    
    const user = await this.usersRepository.create({name, username, email, password, isAdmin})
  }
}

export { CreateUserUseCase }