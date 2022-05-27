import { Request, Response, NextFunction } from "express"
import { Router } from 'express'
import { usersRoutes } from './users.routes'
import { authenticateRoutes } from './authenticate.routes'
import { institutionsRoutes } from './institutions.routes'
import { booksRoutes } from './books.routes'
import Cors from 'cors'

const router = Router()

const cors = Cors()

router.use(cors)

router.use((request: Request, response: Response, next: NextFunction) => {
  response.header("Access-Control-Allow-Origin", "*")
  next();
});

router.use("/users", usersRoutes)
router.use("/", authenticateRoutes)
router.use("/institutions", institutionsRoutes)
router.use("/books", booksRoutes)

export { router }