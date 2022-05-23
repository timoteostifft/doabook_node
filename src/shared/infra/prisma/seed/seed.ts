import { admin } from "./admin"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main () {
  await prisma.users.create({
    data: await admin()
  })
}

main().catch(e => {
  console.log(e)
  process.exit(1)
}).finally(() => {
  prisma.$disconnect
})