import { prisma } from "./prisma";
import * as line from "@line/bot-sdk";
import { lineConfig } from "../global/line/line_config";

const client = new line.Client(lineConfig);

const getNoteFromCid = async (c_id: string) => {
  return await prisma.note.findMany({
    where: {
      c_id: c_id,
    },
    orderBy : {
      create_at : "asc"
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

  const classify = await prisma.classify.findFirst({
    where: {
      c_id: c_id,
    },
    include : {
      creator : true
    }
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

  if (true) {
    client.pushMessage(classify.creator.line_id, {
      type: "text",
      text: "มีการตอบกลับจากผู้เชี่ยวชาญ",
    });
  }

  return fullNote;
};

const readMessage = async (uid: string, cid: string) => {
  console.log(uid, cid);

  const read = await prisma.note.updateMany({
    where: {
      NOT: {
        create_by: uid,
      },
      c_id: cid,
    },
    data: {
      read_status: true,
    },
  });

  return read;
};

export { addNote, getNoteFromCid, readMessage };
