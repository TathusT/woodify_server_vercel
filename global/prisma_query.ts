import { prisma } from "./prisma";



async function verifyLogin(query : any) {
  return await prisma.users.findMany({
    where: query,
  });
}

async function createUser(query : any){
    return await prisma.users.create({data : query})
}

export {verifyLogin, createUser}
