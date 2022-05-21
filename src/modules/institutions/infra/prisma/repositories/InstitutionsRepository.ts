import { prisma } from "../../../../../database/prismaClient"

import { ICreateInstitutionDTO } from "../../../dto/ICreateInstitutionDTO";
import { IUpdateInstitutionAdminDTO } from "../../../dto/IUpdateInstituionAdminDTO";
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

  async updateAdmin({ id, data }: IUpdateInstitutionAdminDTO): Promise<Institution> {
    console.log(data)

    const institution = await prisma.institutions.update({
      where: {
        id,
      },
      data
    })
    return institution
  }

  async list(): Promise<Institution[]> {
    const all = await prisma.institutions.findMany()
    return all
  }

  async findById(id: string): Promise<Institution | null> {
    const institution = await prisma.institutions.findFirst({
      where: {
        id
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