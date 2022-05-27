import { Router } from 'express'
import { CreateBookController } from '../../../../modules/books/useCases/createBook/CreateBookController'
import { ListBooksController } from '../../../../modules/books/useCases/listBooks/listBooksController'
import { UpdateBookController } from '../../../../modules/books/useCases/updateBook/UpdateBookController'

const booksRoutes = Router()

const createBookController = new CreateBookController()
const updateBookController = new UpdateBookController()
const listBooksController = new ListBooksController()

booksRoutes.post("/", createBookController.handle)
booksRoutes.patch("/:id", updateBookController.handle)
booksRoutes.get('/:institution_id', listBooksController.handle)

export { booksRoutes }