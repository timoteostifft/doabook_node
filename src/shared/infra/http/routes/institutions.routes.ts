import { Router } from 'express'
import { CreateInstitutionController } from '../../../../modules/institutions/useCases/createInstitution/CreateInstitutionController'
import { UpdateInstitutionAdminController } from '../../../../modules/institutions/useCases/updateInstitutionAdmin/UpdateInstitutionAdminController'

const institutionsRoutes = Router()

const createInstitutionController = new CreateInstitutionController()
const updateInstitutionAdminController = new UpdateInstitutionAdminController()

institutionsRoutes.post('/', createInstitutionController.handle)
institutionsRoutes.patch('/:id', updateInstitutionAdminController.handle)

export { institutionsRoutes }