import { Router } from 'express'
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController'
import { ListUsersController } from '../../../../modules/users/useCases/listUsers/ListUsersController'

const usersRoutes = Router()

const listUsersController = new ListUsersController()
const createUserController = new CreateUserController()

usersRoutes.get('/', listUsersController.handle)
usersRoutes.post('/', createUserController.handle)

export { usersRoutes }