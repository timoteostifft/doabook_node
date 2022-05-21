import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateInstitutionAdminUseCase } from './UpdateInstitutionAdminUseCase'

class UpdateInstitutionAdminController {
  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.params

    const data = request.body

    const updateInstitutionAdminUseCase = container.resolve(UpdateInstitutionAdminUseCase)

    await updateInstitutionAdminUseCase.execute({ id, data })

    return response.status(201).send()
  }
}

export { UpdateInstitutionAdminController }