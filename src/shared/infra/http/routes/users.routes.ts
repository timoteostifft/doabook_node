import { Router } from 'express'
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController'
import { ListUsersController } from '../../../../modules/users/useCases/listUsers/ListUsersController'
import { UpdateUserController } from '../../../../modules/users/useCases/updateUser/UpdateUserController'

const usersRoutes = Router()

const listUsersController = new ListUsersController()
const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()

usersRoutes.get('/', listUsersController.handle)
usersRoutes.post('/', createUserController.handle)
usersRoutes.post('/update/:id', updateUserController.handle)

export { usersRoutes }