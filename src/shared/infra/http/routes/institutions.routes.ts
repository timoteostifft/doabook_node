import { Router } from 'express'
import { CreateInstitutionController } from '../../../../modules/institutions/useCases/createInstitution/CreateInstitutionController'
import { DeleteInstitutionAdminController } from '../../../../modules/institutions/useCases/deleteInstitutionAdmin/DeleteInstitutionAdminController'

const institutionsRoutes = Router()

const createInstitutionController = new CreateInstitutionController()
const deleteInstitutionAdminController = new DeleteInstitutionAdminController()

institutionsRoutes.post('/', createInstitutionController.handle)
institutionsRoutes.post('/admin', deleteInstitutionAdminController.handle)

export { institutionsRoutes }