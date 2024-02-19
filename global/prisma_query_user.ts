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
    }
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

const getUserWithEmail = async (email : string) => {
  return await prisma.users.findFirst({
    where : {
      email : email
    }
  })
};

const getCountExpert = async () => {
  return await prisma.users.count({
    where : {
      role : "EXPERT"
    }
  })
}

const setUserData = async (data : any) => {
  return await prisma.users.update({
    where : {
      line_id : data.line_id,
    },
    data : {
      firstname : data.firstname,
      lastname : data.lastname,
      phone : data.phone,
      email : data.email,
      verify_data : true
    }
  })
}

const createExpert = async (query : any) => {
  return await prisma.users.create({
    data : query
  })
}

const deleteUser = async (u_id : string) => {
  return await prisma.users.delete({
    where : {
      u_id : u_id
    }
  })
}

const banUser = async (u_id : string) => {
  return await prisma.users.update({
    data : {
      
    },
    where : {
      u_id : u_id
    }
  })
}

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
  banUser
};
