import { Router } from 'express'
import { CreateInstitutionController } from '../../../../modules/institutions/useCases/createInstitution/CreateInstitutionController'
import { ListInstitutionsController } from '../../../../modules/institutions/useCases/listInstitutions/ListInstitutionsController'
import { UpdateInstitutionAdminController } from '../../../../modules/institutions/useCases/updateInstitutionAdmin/UpdateInstitutionAdminController'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const institutionsRoutes = Router()

const createInstitutionController = new CreateInstitutionController()
const updateInstitutionAdminController = new UpdateInstitutionAdminController()
const listInstitutionsController = new ListInstitutionsController()

institutionsRoutes.post('/',ensureAuthenticated, ensureAdmin, createInstitutionController.handle)
institutionsRoutes.patch('/:id', updateInstitutionAdminController.handle)
institutionsRoutes.get("/", listInstitutionsController.handle)

export { institutionsRoutes }