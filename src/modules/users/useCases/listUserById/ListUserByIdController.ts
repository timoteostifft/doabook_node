import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListUserByIdUseCase } from './ListUserByIdUseCase'

class ListUserByIdController {
  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.params

    const listUserByIdUseCase = container.resolve(ListUserByIdUseCase)

    const all = await listUserByIdUseCase.execute({ id });

    return response.json(all);
  }
}

export { ListUserByIdController }
