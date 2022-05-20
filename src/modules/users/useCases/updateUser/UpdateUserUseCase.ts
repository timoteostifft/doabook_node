import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../infra/prisma/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string
  data: {
    name?: string
    email?: string
    password?: string
  }
}

@injectable()
class UpdateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository){}

  async execute({ id, data }: IRequest): Promise<User> {
    
    const userExists = await this.usersRepository.findById(id)

    if (!userExists) {
      throw new AppError("User doesn't exists!", 400)
    }

    const user = await this.usersRepository.update({ id, data })
    
    return user
  }
}

export { UpdateUserUseCase }