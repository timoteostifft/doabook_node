import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListInstitutionsUseCase } from './ListInstitutionsUseCase'

class ListInstitutionsController {
  async handle(request: Request, response: Response): Promise<Response>{
    const listInstitutionsUseCase = container.resolve(ListInstitutionsUseCase)

    const all = await listInstitutionsUseCase.execute();

    return response.json(all);
  }
}

export { ListInstitutionsController }