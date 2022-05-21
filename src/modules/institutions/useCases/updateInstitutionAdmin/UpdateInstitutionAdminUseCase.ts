import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository"

interface IRequest {
  id: string
  data: {
    admin_id: string
  }
}

@injectable()
class UpdateInstitutionAdminUseCase {

  constructor(
    @inject("InstitutionsRepository")
    private institutionsRepository: IInstitutionsRepository
  ) {}

  async execute({ id, data }: IRequest): Promise<void> {

    const institutionExists = await this.institutionsRepository.findById(id)

    if(!institutionExists) {
      throw new AppError("Institution does not exist!")
    }

    await this.institutionsRepository.updateAdmin({
      id, data
    })
  }
}

export { UpdateInstitutionAdminUseCase }