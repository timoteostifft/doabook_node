import { ICreateInstitutionDTO } from "../dto/ICreateInstitutionDTO"
import { Institution } from "../infra/prisma/entities/Institution"

interface IInstitutionsRepository {
  create({}: ICreateInstitutionDTO): Promise<Institution>
  findByName(name: string): Promise<Institution | null>
}

export { IInstitutionsRepository }