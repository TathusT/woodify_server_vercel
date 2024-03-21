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

const getUserWithEmail = async (email: string) => {
  return await prisma.users.findFirst({
    where: {
      email: email,
    },
  });
};

const getCountExpert = async () => {
  return await prisma.users.count({
    where: {
      role: "EXPERT",
    },
  });
};

const setUserData = async (data: any) => {
  return await prisma.users.update({
    where: {
      line_id: data.line_id,
    },
    data: {
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
      email: data.email,
      verify_data: true,
    },
  });
};

const createExpert = async (query: any) => {
  return await prisma.users.create({
    data: query,
  });
};

const deleteUser = async (u_id: string) => {
  return await prisma.users.update({
    data: {
      status: "DELETE",
    },
    where: {
      u_id: u_id,
    },
  });
};

const banUser = async (u_id: string) => {
  return await prisma.users.update({
    data: {
      status: "BAN",
    },
    where: {
      u_id: u_id,
    },
  });
};

const activeUser = async (u_id: string) => {
  return await prisma.users.update({
    data: {
      status: "ACTIVE",
    },
    where: {
      u_id: u_id,
    },
  });
};

const getAllUserWithFilter = async (
  page: number,
  pageSize: number,
  filter: any = null
) => {
  const skip = (page - 1) * pageSize;
  const data = await prisma.users.findMany({
    skip,
    take: pageSize,
    where: {
      ...filter,
    },
  });

  const total = await prisma.users.count({
    where: {
      ...filter,
    },
  });

  return { data, total };
};

const updateUser = async (data: any, u_id: string) => {
  if (data.email) {
    const checkEmail = await prisma.users.findMany({
      where: {
        email: data.email,
      },
    });
    if (checkEmail.length != 0) {
      return "email is taken";
    }
  }
  if (data.phone) {
    const checkPhone = await prisma.users.findMany({
      where: {
        phone: data.phone,
      },
    });
    if (checkPhone.length != 0) {
      return "phone is taken";
    }
  }
  const user = await prisma.users.update({
    where: {
      u_id: u_id,
    },
    data: {
      ...data,
    },
  });
  return user; // คืนค่า user หลังจากที่อัปเดตข้อมูลเสร็จสมบูรณ์
};

export {
  getUserFromLineId,
  getUserFromUserId,
  getAllUser,
  updateRoleFromId,
  getUserToday,
  getUserWithEmail,
  getCountExpert,
  setUserData,
  createExpert,
  deleteUser,
  banUser,
  getAllUserWithFilter,
  activeUser,
  updateUser,
};
