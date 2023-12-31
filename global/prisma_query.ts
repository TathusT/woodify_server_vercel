import { prisma } from "./prisma";

async function getWoodInfo() {
  return await prisma.wood_info.findMany({
    include : {
      wood_image : true
    }
  });
}

async function verifyLogin(query : any) {
  return await prisma.users.findMany({
    where: query,
  });
}

async function createUser(query : any){
    return await prisma.users.create({data : query})
}

export {getWoodInfo, verifyLogin, createUser}
