import { prisma } from "./prisma";

const getUserFromLineId = async (lineid: string) => {
  return await prisma.users.findFirst({
    where: {
      line_id: lineid,
    },
    select: {
      u_id: true,
    },
  });
};

const getAllUser = async () => {
  return await prisma.users.findMany()
}

const getUserFromUserId = async (uid: string) => {
  return await prisma.users.findFirst({
    where: {
      u_id: uid,
    },
    select: {
      role: true,
    },
  });
};

const updateRoleFromId = async (uid : string, role : any) => {
  return await prisma.users.update({
    where : {
      u_id : uid
    },
    data : {
      role : role
    }
  })
}


export { getUserFromLineId, getUserFromUserId, getAllUser, updateRoleFromId };
