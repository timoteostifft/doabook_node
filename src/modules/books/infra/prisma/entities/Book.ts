import { Prisma } from '@prisma/client'
import { v4 as uuidV4 } from 'uuid'

class Book {
  id: string
  name: string
  edition: Prisma.Decimal
  year: Prisma.Decimal
  launch: Date
  condition: string
  quantity: Prisma.Decimal
  institution_id: string

  constructor() {
    if(!this.id){
      this.id = uuidV4();
    }
  };
}


export { Book }