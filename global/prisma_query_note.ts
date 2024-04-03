import { prisma } from "./prisma";
import * as line from "@line/bot-sdk";
import { lineConfig } from "../global/line/line_config";

const client = new line.Client(lineConfig);

const getNoteFromCid = async (c_id: string) => {
  return await prisma.note.findMany({
    where: {
      c_id: c_id,
    },
    orderBy: {
      create_at: "asc",
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
    include: {
      creator: true,
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
 
  const message : any = {
    type: "flex",
    altText: "มีข้อความตอบกลับจากผู้เชี่ยวชาญ",
    contents: {
      type: "carousel",
      contents: [
        {
          type: "bubble",
          hero: {
            type: "image",
            size: "full",
            aspectRatio: "1:1",
            aspectMode: "cover",
            action: {
              type: "uri",
              uri: `${process.env.PATH_FRONT}/line/classify_detail/${c_id}`,
            },
            url: `${process.env.PATH_BACKEND}${classify.image}`,
            margin: "none",
            animated: true,
            align: "center",
            gravity: "top",
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "กดปุ่มเพื่อเข้าไปดูข้อความ",
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "button",
                style: "primary",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ดูข้อความ",
                  uri: `${process.env.PATH_FRONT}/line/classify_detail/${c_id}`,
                },
              },
            ],
            flex: 0,
          },
        },
      ],
    },
  };
 
  // if (true) {
  //   client.pushMessage(classify.creator.line_id, {
  //     type: "text",
  //     text: "มีการตอบกลับจากผู้เชี่ยวชาญ",
  //   });
  // }

  if (classify.creator.u_id != u_id) {
    client.pushMessage(classify.creator.line_id, message);
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
