import { Router } from 'express'
import { CreateBookController } from '../../../../modules/books/useCases/createBook/CreateBookController'
import { UpdateBookController } from '../../../../modules/books/useCases/updateBook/UpdateBookController'

const booksRoutes = Router()

const createBookController = new CreateBookController()
const updateBookController = new UpdateBookController()

booksRoutes.post("/", createBookController.handle)
booksRoutes.patch("/", updateBookController.handle)

export { booksRoutes }