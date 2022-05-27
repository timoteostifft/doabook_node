import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListBooksUseCase } from './ListBooksUseCase'

class ListBooksController {
  async handle(request: Request, response: Response): Promise<Response>{

    const { institution_id } = request.params

    const listBooksUseCase = container.resolve(ListBooksUseCase)

    const all = await listBooksUseCase.execute({ institution_id });

    return response.json(all);
  }
}

export { ListBooksController }