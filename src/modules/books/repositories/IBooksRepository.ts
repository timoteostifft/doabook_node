import { ICreateBookDTO } from "../dtos/ICreateBookDTO"
import { Book } from "../infra/prisma/entities/Book"

interface IBooksRepository {
  create(data: ICreateBookDTO): Promise<Book>
  increment(id: string): Promise<Book>
  findExist(name: string, edition: number, condition: string): Promise<Book | null>
}

export { IBooksRepository }