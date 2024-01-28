import { prisma } from "./prisma";

const getNoteFromCid = async (c_id: string) => {
  return await prisma.note.findMany({
    where: {
      c_id: c_id,
    },
    include: {
      creator: {
        select: {
          firstname: true,
          u_id: true,
        },
      },
    },
  });
};

const addNote = async (description: string, c_id: string, u_id: string) => {
  const createdNote = await prisma.note.create({
    data: {
      description: description,
      c_id: c_id,
      create_by: u_id,
    },
  });

  // ดึงข้อมูลล่าสุดที่เพิ่มเข้าไป
  const fullNote = await prisma.note.findFirst({
    where: {
      n_id: createdNote.n_id,
    },
    include: {
      creator: {
        select: {
          firstname: true,
          u_id: true,
        },
      },
    },
  });

  return fullNote;
};

export { addNote, getNoteFromCid };
