import { ICreateBookDTO } from "../dtos/ICreateBookDTO"
import { IUpdateBookDTO } from "../dtos/IUpdateBookDTO"
import { Book } from "../infra/prisma/entities/Book"

interface IBooksRepository {
  create(data: ICreateBookDTO): Promise<Book>
  increment(id: string): Promise<Book>
  update({ id, data }: IUpdateBookDTO): Promise<Book>
  findExist(name: string, edition: number, condition: string): Promise<Book | null>
  findById(id: string): Promise<Book | null>
}

export { IBooksRepository }