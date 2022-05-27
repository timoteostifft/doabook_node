import { inject, injectable } from 'tsyringe'
import { Book } from '../../infra/prisma/entities/Book'
import { IBooksRepository } from '../../repositories/IBooksRepository'

interface IRequest {
  institution_id: string
}

@injectable()
class ListBooksUseCase {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute({ institution_id }: IRequest): Promise<Book[]>{
    const books = await this.booksRepository.list(institution_id)
    return books
  }
}

export { ListBooksUseCase }