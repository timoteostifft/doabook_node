import { inject, injectable } from 'tsyringe'
import { Institution } from '../../infra/prisma/entities/Institution'
import { IInstitutionsRepository } from '../../repositories/IInstitutionsRepository'

@injectable()
class ListInstitutionsUseCase {
  constructor(
    @inject("InstitutionsRepository")
    private usersRepository: IInstitutionsRepository
  ) {}

  async execute(): Promise<Institution[]>{
    const users = await this.usersRepository.list()
    return users
  }
}

export { ListInstitutionsUseCase }