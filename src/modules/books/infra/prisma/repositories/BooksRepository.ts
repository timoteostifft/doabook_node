import { prisma } from "../../../../../database/prismaClient"

import { ICreateBookDTO } from "../../../dtos/ICreateBookDTO";
import { IBooksRepository } from "../../../repositories/IBooksRepository";
import { Book } from "../entities/Book";

class BooksRepository implements IBooksRepository  {
  
  async create(data: ICreateBookDTO): Promise<Book> {
    const book = await prisma.books.create({
      data
    })
    return book
  }

  async findExist(name: string, edition: number, condition: string): Promise<Book | null> {
    const book = await prisma.books.findFirst({
      where: { name, edition, condition }
    })
    return book
  }

  async increment(id: string): Promise<Book> {
    const book = await prisma.books.update({
      where: {
        id,
      },
      data: {
        quantity: {
          increment: 1
        }
      }
    })
    return book
  }
}

export { BooksRepository }