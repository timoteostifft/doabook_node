import { Request, Response } from 'express'
import { UsersRepository } from '../../infra/prisma/repositories/UsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response>{

    const { name, username, email, password, isAdmin } = request.body

    const usersRepository = new UsersRepository() //!
    const createUserUseCase = new CreateUserUseCase(usersRepository)

    const user = await createUserUseCase.execute({
      name,
      username,
      email,
      password,
      isAdmin
    })

    return response.json(user)
  }
}

export { CreateUserController }