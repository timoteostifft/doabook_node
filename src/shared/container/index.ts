import { container } from "tsyringe";

import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository'
import { UsersRepository } from "../../modules/users/infra/prisma/repositories/UsersRepository";

import { IInstitutionsRepository } from '../../modules/institutions/repositories/IInstitutionsRepository'
import { InstitutionsRepository } from '../../modules/institutions/infra/prisma/repositories/InstitutionsRepository'


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IInstitutionsRepository>(
  "InstitutionsRepository",
  InstitutionsRepository
)