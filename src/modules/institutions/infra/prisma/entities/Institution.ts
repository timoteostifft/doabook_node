import { v4 as uuidV4 } from 'uuid'

class Institution {
  id: string
  name: string
  address: string
  admin_id: string

  constructor(){
    if(!this.id){
      this.id = uuidV4()
    }
  }
}

export { Institution }