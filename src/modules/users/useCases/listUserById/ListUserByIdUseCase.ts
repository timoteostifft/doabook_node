import { inject, injectable } from 'tsyringe'
import { User } from '../../infra/prisma/entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  id: string
}

@injectable()
class ListUserByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id }: IRequest): Promise<User | null>{
    const user = await this.usersRepository.findById(id)
    return user
  }
}

export { ListUserByIdUseCase }