import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateBookUseCase } from './CreateBookUseCase'


class CreateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      name, 
      edition, 
      year,
      launch,
      condition,
      quantity,
      institution_id } = request.body

      const createBookUseCase = container.resolve(CreateBookUseCase)

      await createBookUseCase.execute({
        name, 
        edition, 
        year,
        launch,
        condition,
        quantity,
        institution_id
      })

      return response.status(201).send()
  }
}

export { CreateBookController }