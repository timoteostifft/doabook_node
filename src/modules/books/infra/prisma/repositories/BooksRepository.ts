import { prisma } from "../../../../../database/prismaClient"

import { ICreateBookDTO } from "../../../dtos/ICreateBookDTO";
import { IUpdateBookDTO } from "../../../dtos/IUpdateBookDTO";
import { IBooksRepository } from "../../../repositories/IBooksRepository";
import { Book } from "../entities/Book";

class BooksRepository implements IBooksRepository  {
  
  async create(data: ICreateBookDTO): Promise<Book> {
    const book = await prisma.books.create({
      data
    })
    return book
  }

  async update({ id, data }: IUpdateBookDTO): Promise<Book> {
    const book = await prisma.books.update({
      where: {
        id,
      },
      data
    })
    return book
  }

  async list(institution_id: string): Promise<Book[]> {
    const all = await prisma.books.findMany({
      where: { institution_id }
    })
    return all
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

  async findById(id: string): Promise<Book | null> {
    const book = await prisma.books.findFirst({
      where: { id }
    })
    return book
  }
}

export { BooksRepository }