import { ICreateInstitutionDTO } from "../dto/ICreateInstitutionDTO"
import { IUpdateInstitutionAdminDTO } from "../dto/IUpdateInstituionAdminDTO"
import { Institution } from "../infra/prisma/entities/Institution"

interface IInstitutionsRepository {
  create({ name, address, admin_id }: ICreateInstitutionDTO): Promise<Institution>
  updateAdmin({ id, data }: IUpdateInstitutionAdminDTO): Promise<Institution>
  findByName(name: string): Promise<Institution | null>
  findById(id: string): Promise<Institution | null>
}

export { IInstitutionsRepository }