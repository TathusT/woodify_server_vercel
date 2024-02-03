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
  return await prisma.users.findMany();
};

const getUserToday = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const result = await prisma.users.count({
    where: {
      create_at: {
        gte: today, // มากกว่าหรือเท่ากับวันที่เท่ากับวันนี้
        lt: new Date(today.getTime() + 24 * 60 * 60 * 1000), // น้อยกว่าวันพรุ่งนี้
      },
    },
  });
  return result;
};

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

const updateRoleFromId = async (uid: string, role: any) => {
  return await prisma.users.update({
    where: {
      u_id: uid,
    },
    data: {
      role: role,
    },
  });
};

export { getUserFromLineId, getUserFromUserId, getAllUser, updateRoleFromId, getUserToday };
