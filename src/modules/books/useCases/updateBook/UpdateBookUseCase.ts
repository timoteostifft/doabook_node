import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
  id: string,
  data: {
    edition: number
    condition: string
    institution_id: string
  }
}

@injectable()
class UpdateBookUseCase {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute({ id, data }: IRequest) {
    const bookExists = await this.booksRepository.findById(id)

    if(!bookExists) {
      throw new AppError("Book does not exists!")
    }

    const book = await this.booksRepository.update({id, data})
  }
}

export { UpdateBookUseCase }