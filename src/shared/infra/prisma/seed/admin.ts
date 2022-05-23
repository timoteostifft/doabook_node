import { v4 as uuidV4 } from 'uuid'
import { hash }  from 'bcrypt'

// const encrypted = async () => {
//   return await hash('admin', 8)
// }

const admin = async () => {
  return {
    id: uuidV4(),
    name: "admin",
    email: "admin@doabook.com.br",
    password: await hash('admin', 8),
    isAdmin: true
  }
}

export { admin }