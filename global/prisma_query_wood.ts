import { prisma } from "./prisma";
import fs from "fs";

async function getWoodInfo() {
  return await prisma.wood_info.findMany({
    include: {
      wood_image: true,
    },
  });
}

async function getWoodInfoLine() {
  return await prisma.wood_info.findMany({
    where : {
      status : true
    },
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
  return await prisma.wood_info.update({
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
      update_by: u_id.id,
    },
  });
}

async function createWoodInfo(
  common_name: any,
  eng_name: any,
  botanical_name: any,
  pedigree: any,
  place_of_origin: any,
  wood_characteristics: any,
  anatomical_characteristics: any,
  other: any,
  status: boolean,
  u_id: any
) {
  return await prisma.wood_info.create({
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
      create_by: u_id.id,
      update_by: u_id.id,
    },
  });
}

async function updateWoodImage(paths: any, id: string) {
  let query = paths.map((value: any) => {
    return {
      w_id: id,
      path: "/image/wood_image/" + value,
    };
  });

  await prisma.wood_Image.createMany({
    data: query,
  });
}

async function deleteImageWood(w_id: string, deleteImage: any = null) {
  if (deleteImage != null) {
    deleteImage.map((path: any) => {
      fs.unlink(`.${path}`, (err) => {});
    });
    let path_delete = await prisma.wood_Image.findMany({
      where: {
        path: {
          in: deleteImage,
        },
      },
    });
    let w_id_delete = path_delete.map((value) => value.wi_id);
    return await prisma.wood_Image.deleteMany({
      where: {
        w_id: w_id,
        wi_id: {
          in: w_id_delete,
        },
      },
    });
  }
}

async function deleteWoodInfo(id: string, u_id: string) {
  const user = await prisma.users.findMany({
    where: {
      u_id: u_id,
    },
  });

  if (user[0].role == "EXPERT") {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }
}

export {
  getWoodInfo,
  updateWoodInfoNoImage,
  getWoodInfoOne,
  deleteWoodInfo,
  updateWoodImage,
  createWoodInfo,
  deleteImageWood,
  getWoodInfoLine
};
