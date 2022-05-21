import { Router } from 'express'
import { usersRoutes } from './users.routes'
import { authenticateRoutes } from './authenticate.routes'
import { institutionsRoutes } from './institutions.routes'

const router = Router()

router.use("/users", usersRoutes)
router.use("/", authenticateRoutes)
router.use("/institutions", institutionsRoutes)

export { router }