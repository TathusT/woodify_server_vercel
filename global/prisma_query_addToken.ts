import { prisma } from "./prisma";
import cuid from "cuid";

const addTokenInvited = async (inviteBy: string, inviteTo: string) => {
  return await prisma.add_Token.create({
    data: {
      invited_by: inviteBy,
      invited_to: inviteTo,
    },
  });
};

const checkTimeLinkInvite = async (a_id: string) => {
  const data = await prisma.add_Token.findUnique({
    where: { a_id: a_id },
  });
  if (data && data.time_out && new Date() > new Date(data.time_out)) {
    return { message: "timeout", data: data };
  } else {
    const checkAndUpdate = await prisma.users.findFirst({
      where : {
        email : data.invited_to
      }
    })
    if(checkAndUpdate != null && checkAndUpdate.verify_data != false){
      await prisma.users.update({
        where : {
          email : data.invited_to
        },
        data : {
          role : 'EXPERT'
        }
      })
      return { message: "update success", data: data, userid : checkAndUpdate.u_id };
    }
    return { message: "not timeout", data: data };
  }
};

export { addTokenInvited, checkTimeLinkInvite };
