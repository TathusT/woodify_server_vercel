import { prisma } from "./prisma";

async function getWoodInfo() {
  return await prisma.wood_info.findMany({
    include: {
      wood_image: true,
    },
  });
}

async function getWoodInfoOne(id: string) {
  return await prisma.wood_info.findMany({
    where: {
      w_id: id,
    },
    include: {
      wood_image: true,
    },
  });
}

async function updateWoodInfoNoImage(
  common_name: any,
  eng_name: any,
  botanical_name: any,
  pedigree: any,
  place_of_origin: any,
  wood_characteristics: any,
  anatomical_characteristics: any,
  other: any,
  status: boolean,
  id: any,
  u_id: any
) {
  await prisma.wood_info.update({
    where: {
      w_id: id,
    },
    data: {
      common_name: common_name,
      eng_name: eng_name,
      botanical_name: botanical_name,
      pedigree: pedigree,
      place_of_origin: place_of_origin,
      wood_characteristics: wood_characteristics,
      anatomical_characteristics: anatomical_characteristics,
      other: other,
      status: status,
      update_by: u_id,
    },
  });
}

async function deleteWoodInfo(id: string, u_id: string) {
  const user = await prisma.users.findMany({
    where: {
      u_id: u_id,
    },
  });

  if (user[0].role == "EXPERT") {
    await prisma.$transaction([
      prisma.wood_Image.deleteMany({
        where: {
          w_id: id,
        },
      }),
      prisma.wood_info.delete({
        where: {
          w_id: id,
        },
      }),
    ]);
  }
}

export { getWoodInfo, updateWoodInfoNoImage, getWoodInfoOne, deleteWoodInfo };
