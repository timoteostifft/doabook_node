import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { sign } from 'jsonwebtoken'

import { compare } from 'bcrypt'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}
  
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if(!user) {
      throw new AppError("Email or password incorrect!")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new AppError("Email or password incorrect!")
    }

    const token = sign({}, '52e09ebca6f8ed074aa1296f0dcbf0ec', {
      subject: user.id,
      expiresIn: "1d"
    })

    return {
      user,
      token
    }
  }
}

export { AuthenticateUserUseCase }