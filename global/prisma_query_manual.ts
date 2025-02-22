import { prisma } from "./prisma";
import fs from "fs";
import path from "path";

async function createManual(
  topic: string,
  description: string,
  status: boolean,
  image: string,
  u_id: string
) {
  try {
    const manual = await prisma.manual.create({
      data: {
        topic: topic,
        description: description,
        status: status,
        image: image,
        create_by: u_id,
        update_by: u_id,
      },
    });

    console.log("Manual created:", manual);
  } catch (error) {
    console.error("Error creating manual:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function updateManualNotImage(
  topic: string,
  description: string,
  status: boolean,
  u_id: string,
  id: string
) {
  try {
    const manual = await prisma.manual.update({
      where: {
        m_id: id,
      },
      data: {
        topic: topic,
        description: description,
        status: status,
        update_by: u_id,
      },
    });

    console.log("Manual created:", manual);
  } catch (error) {
    console.error("Error creating manual:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function updateManualImage(
  topic: string,
  description: string,
  status: boolean,
  image: string,
  u_id: string,
  id: string
) {
  try {
    const data = await getManual(id);
    const filenameToDelete = data[0].image; // ชื่อไฟล์ที่ต้องการลบ
    const uploadDirectory = "image/manual"; // โฟลเดอร์ที่รูปภาพถูกเก็บไว้
    const filePath = path.join(uploadDirectory, filenameToDelete);
    const manual = await prisma.manual.update({
      where: {
        m_id: id,
      },
      data: {
        topic: topic,
        description: description,
        status: status,
        image: image,
        update_by: u_id,
      },
    });
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file: ${err}`);
        return;
      }
      console.log("File deleted successfully");
    });

    console.log("Manual created:", manual);
  } catch (error) {
    console.error("Error creating manual:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function deleteManual(id: string, u_id: string) {
  const user = await prisma.users.findMany({
    where: {
      u_id: u_id,
    },
  });

  if (user[0].role == "EXPERT") {
    await prisma.$transaction([
      prisma.manual.deleteMany({
        where: {
          m_id: id,
        },
      }),
    ]);
  }
}

async function getAllManual() {
  return await prisma.manual.findMany();
}

async function getAllManualWithFilter(page : number, pageSize : number, filter: any = null, orderBy : any = null) {
  const skip = (page - 1) * pageSize;
  const data = await prisma.manual.findMany({
    skip,
    take: pageSize,
    where: {
      ...filter,
    },
    orderBy: {
      ...orderBy // เรียงลำดับตามเวลาอัปเดตล่าสุด
    },
  });

  const total = await prisma.manual.count({
    where: {
      ...filter,
    },
  });

  return { data, total };
}

async function getManual(id: string) {
  return await prisma.manual.findMany({
    where: {
      m_id: id,
    },
  });
}
export {
  createManual,
  getAllManual,
  getManual,
  updateManualImage,
  updateManualNotImage,
  deleteManual,
  getAllManualWithFilter
};
