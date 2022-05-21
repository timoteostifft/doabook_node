import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { User } from "../../../users/infra/prisma/entities/User"
import { Institution } from "../../infra/prisma/entities/Institution"
import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository"

interface IRequest{
  name: string
  address: string
  admin_id: string
}

@injectable()
class CreateInstitutionUseCase {
  constructor(
    @inject("InstitutionsRepository")
    private institutionsRepository: IInstitutionsRepository
  ) {}

  async execute({ name, address, admin_id }: IRequest): Promise<Institution>{

    const institutionExists = await this.institutionsRepository.findByName(name)

    if(institutionExists) {
      throw new AppError("Institution already exists!")
    }

    const institution = await this.institutionsRepository.create({
      name,
      address,
      admin_id
    })

    return institution
  }
}

export { CreateInstitutionUseCase }