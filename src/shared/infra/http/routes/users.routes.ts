import { Router } from 'express'
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController'
import { ListUserByIdController } from '../../../../modules/users/useCases/listUserById/ListUserByIdController'
import { ListUsersController } from '../../../../modules/users/useCases/listUsers/ListUsersController'
import { UpdateUserController } from '../../../../modules/users/useCases/updateUser/UpdateUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const usersRoutes = Router()

const listUsersController = new ListUsersController()
const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()
const listUserByIdController = new ListUserByIdController()

usersRoutes.get('/', listUsersController.handle)
usersRoutes.post('/', createUserController.handle)
usersRoutes.patch('/update/', ensureAuthenticated, updateUserController.handle)
usersRoutes.get('/:id', ensureAuthenticated, listUserByIdController.handle)

export { usersRoutes }