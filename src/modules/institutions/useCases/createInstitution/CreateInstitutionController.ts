import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateInstitutionUseCase } from './CreateInstitutionUseCase'

class CreateInstitutionController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { name, address, admin_id } = request.body

    const createInstitutionUseCase = container.resolve(CreateInstitutionUseCase)

    const institution = await createInstitutionUseCase.execute({
      name, address, admin_id
    })

    return response.json(institution)
  }
}

export { CreateInstitutionController }