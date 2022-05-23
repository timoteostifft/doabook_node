import { inject, injectable } from "tsyringe"
import { Book } from "../../infra/prisma/entities/Book"
import { IBooksRepository } from "../../repositories/IBooksRepository"

interface IRequest {
  name: string
  edition: number
  condition: string
  year: number
  launch: Date
  quantity: number
  institution_id: string
}

@injectable()
class CreateBookUseCase {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute({ 
    name, 
    edition, 
    year,
    launch,
    condition,
    quantity,
    institution_id }: IRequest): Promise<Book> {

    const bookExists = await this.booksRepository.findExist(name, edition, condition)

    if (bookExists) {
      const book = await this.booksRepository.increment(bookExists.id)
      return book
    }

    const book = await this.booksRepository.create({
      name, 
      edition, 
      year,
      launch,
      condition,
      quantity,
      institution_id
    })
    return book
  }
}

export { CreateBookUseCase }