import { prisma } from "../../../../../database/prismaClient"

import { ICreateInstitutionDTO } from "../../../dto/ICreateInstitutionDTO";
import { IInstitutionsRepository } from "../../../repositories/IInstitutionsRepository";
import { Institution } from "../entities/Institution";

class InstitutionsRepository implements IInstitutionsRepository {
  
  async create({ name, address, admin_id }: ICreateInstitutionDTO): Promise<Institution> {
    const institution = await prisma.institutions.create({
      data: {
        name,
        address,
        admin_id
      }
    })
    return institution
  }

  async findByName(name: string): Promise<Institution | null> {
    const institution = await prisma.institutions.findFirst({
      where: {
        name
      }
    })
  return institution    
  }
}

export { InstitutionsRepository }