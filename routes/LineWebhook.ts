import express from "express";
import { Router } from "express";
import { prisma } from "../global/prisma";
import * as line from "@line/bot-sdk";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import { lineConfig } from "../global/line/line_config";
import { getWoodInfo, getWoodInfoLine } from "../global/prisma_query_wood";
import { createClassifyDB } from "../global/prisma_query_classify";

const router: Router = express.Router();

const client = new line.Client(lineConfig);
const userStates: any = {};

router.post("/webhook", async (req, res) => {
  try {
    const events = req.body.events;
    // console.log(events);

    lineEvent(events[0]);
    res.status(200).send("OK");
  } catch (err) {
    res.status(500).end();
  }
});

const createWoodCarousel = async (uid: string, event: any) => {
  const objectBubble: any = [];
  const dataWood = await getWoodInfoLine();
  const max = 11;
  let more = false;
  let urlRequest;
  let sliceWood;

  if (dataWood.length == 0 || dataWood == null) {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "ขณะนี้ยังไม่มีข้อมูลไม้",
    });
  }

  if (dataWood.length > max) {
    sliceWood = dataWood.slice(0, max);
    more = true;
  } else {
    sliceWood = dataWood;
  }

  sliceWood.forEach((wood) => {
    objectBubble.push({
      type: "bubble",
      hero: {
        type: "image",
        url: `${process.env.PATH_BACKEND}${wood.wood_image[0]?.path}`,
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          uri: `${process.env.PATH_FRONT}/line/wood_detail/${wood.w_id}`,
        },
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `${wood.common_name}`,
            weight: "bold",
            size: "xl",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "lg",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: `${
                      wood.place_of_origin.length > 100
                        ? wood.place_of_origin.slice(0, 97) + "..."
                        : wood.place_of_origin
                    }`,
                    wrap: true,
                    color: "#666666",
                    size: "sm",
                    flex: 5,
                  },
                ],
              },
            ],
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
              label: "ดูรายละเอียด",
              uri: `${process.env.PATH_FRONT}/line/wood_detail/${wood.w_id}`,
            },
          },
        ],
        flex: 0,
      },
    });
  });

  if (more) {
    objectBubble.push({
      type: "bubble",
      hero: {
        type: "image",
        url: `https://vkcwt8l2-4000.asse.devtunnels.ms/image/icon/more_wood.png`,
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          uri: `${process.env.PATH_FRONT}/line/information_wood`,
        },
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `ดูต้นไม้ทั้งหมด`,
            weight: "bold",
            size: "xl",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "lg",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: `กดดูรายละเอียดเพิ่มเติมเพื่อดูต้นไม้ทั้งหมด`,
                    wrap: true,
                    color: "#666666",
                    size: "sm",
                    flex: 5,
                  },
                ],
              },
            ],
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
              label: "ดูรายละเอียดทั้งหมด",
              uri: `${process.env.PATH_FRONT}/line/information_wood`,
            },
          },
        ],
        flex: 0,
      },
    });
  }

  urlRequest = `https://api.line.me/v2/bot/message/push`;
  await axios.request({
    method: "POST",
    url: `${urlRequest}`,
    headers: {
      Authorization: `Bearer ` + lineConfig.channelAccessToken,
      "Content-Type": "application/json",
    },
    data: {
      to: uid,
      messages: [
        {
          type: "flex",
          altText: "This is a Flex Message",
          contents: {
            type: "carousel",
            contents: objectBubble,
          },
        },
      ],
    },
  });
};

const createManualCarousel = async (uid: string, event: any) => {
  let objectBubble: any = [];
  let sliceManual;
  let more = false;
  let max = 11;
  const dataManual = await prisma.manual.findMany({
    where: {
      status: true,
    },
  });

  if (dataManual.length == 0 || dataManual == null) {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "ขณะนี้ยังไม่มีข้อมูลคู่มือ",
    });
  }

  if (dataManual.length > max) {
    sliceManual = dataManual.slice(0, max);
  } else {
    sliceManual = dataManual;
  }
  sliceManual.forEach((manual) => {
    objectBubble.push({
      type: "bubble",
      hero: {
        type: "image",
        url: `${process.env.PATH_BACKEND}/image/manual/${manual.image}`,
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          uri: `${process.env.PATH_FRONT}/line/manual/${manual.m_id}`,
        },
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `${manual.topic}`,
            weight: "bold",
            size: "xl",
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
            style: "link",
            height: "sm",
            action: {
              type: "uri",
              label: "ดูรายละเอียด",
              uri: `${process.env.PATH_FRONT}/line/manual/${manual.m_id}`,
            },
          },
          {
            type: "box",
            layout: "vertical",
            contents: [],
            margin: "sm",
          },
        ],
        flex: 0,
      },
    });
  });

  if (more) {
    objectBubble.push({
      type: "bubble",
      hero: {
        type: "image",
        url: `https://vkcwt8l2-4000.asse.devtunnels.ms/image/icon/more_manual.png`,
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          uri: `${process.env.PATH_FRONT}/line/information_wood`,
        },
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `ดูคู่มือทั้งหมด`,
            weight: "bold",
            size: "xl",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "lg",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: `กดดูรายละเอียดเพิ่มเติมเพื่อดูคู่มือทั้งหมด`,
                    wrap: true,
                    color: "#666666",
                    size: "sm",
                    flex: 5,
                  },
                ],
              },
            ],
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
              label: "ดูรายละเอียดทั้งหมด",
              uri: `${process.env.PATH_FRONT}/line/information_wood`,
            },
          },
        ],
        flex: 0,
      },
    });
  }

  const urlRequest = "https://api.line.me/v2/bot/message/push";

  try {
    const response = await axios.post(
      urlRequest,
      {
        to: uid,
        messages: [
          {
            type: "flex",
            altText: "This is a Flex Message",
            contents: {
              type: "carousel",
              contents: objectBubble,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ` + lineConfig.channelAccessToken,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("LINE API response:", response.data);
  } catch (error) {
    console.error("Error sending message to LINE API:", error.message);
  }
};

const createClassify = async (uid: string, event: any) => {
  let dataPrediction: any;
  try {
    let messageId = event.message.id;
    let urlRequestGetImage = `https://api-data.line.me/v2/bot/message/${messageId}/content`;
    let urlRequest = `https://api.line.me/v2/bot/message/push`;
    client.pushMessage(uid, {
      type: "text",
      text: "กำลังประมวลผลจากรูปภาพที่ส่งมา",
    });
    await axios
      .request({
        method: "GET",
        url: `${urlRequestGetImage}`,
        headers: {
          Authorization: `Bearer ` + lineConfig.channelAccessToken,
        },
        responseType: "arraybuffer",
      })
      .then(async (response: any) => {
        const imagePath = `/image/classify_image/${messageId}.jpg`;
        const imageBuffer = response.data;
        fs.writeFileSync(
          `./image/classify_image/${messageId}.jpg`,
          imageBuffer
        );
        const formData = new FormData();
        formData.append("file", fs.createReadStream(`.${imagePath}`));
        await axios
          .post(`${process.env.PATH_SERVICE_API}/analyze`, formData)
          .then(async (res) => {
            dataPrediction = res.data;
            dataPrediction.prediction.sort(
              (a: any, b: any) => b.percentage - a.percentage
            );
            console.log(dataPrediction);
            if (dataPrediction.prediction[0].percentage < 50) {
              try {
                client.replyMessage(event.replyToken, {
                  type: "text",
                  text: "รูปภาพไม่สามารถวิเคราะห์ได้ กรุณาส่งรูปภาพใหม่ โปรดตรวจสอบความละเอียดของภาพและต่ำแหน่งของหน้าตัดไม้",
                });
                await fs.promises.unlink(`.${imagePath}`);
                console.log(`File deleted: ${imagePath}`);
              } catch (error) {
                if (error.response) {
                  console.error(
                    `Line API Error: ${error.response.status} - ${error.response.statusText}`
                  );
                } else if (error.request) {
                  console.error("No response received from Line API");
                } else {
                  console.error(`Error: ${error.message}`);
                }
              }
            } else {
              const classify = await createClassifyDB(
                dataPrediction,
                uid,
                imagePath
              );
              await axios.request({
                method: "POST",
                url: `${urlRequest}`,
                headers: {
                  Authorization: `Bearer ` + lineConfig.channelAccessToken,
                },
                data: {
                  to: uid,
                  messages: [
                    {
                      type: "flex",
                      altText: "This is a Flex Message",
                      contents: {
                        type: "bubble",
                        hero: {
                          type: "image",
                          size: "full",
                          aspectRatio: "1:1",
                          aspectMode: "cover",
                          action: {
                            type: "uri",
                            uri: `${process.env.PATH_FRONT}/line/classify_detail/${classify.c_id}`,
                          },
                          url: `${process.env.PATH_BACKEND}/image/classify_image/${messageId}.jpg`,
                          margin: "none",
                          animated: true,
                          align: "center",
                          gravity: "top",
                        },
                        body: {
                          type: "box",
                          layout: "horizontal",
                          contents: [
                            {
                              type: "text",
                              text: `ไม้${dataPrediction.prediction[0].wood}`,
                              weight: "bold",
                              size: "xl",
                              align: "start",
                              margin: "xs",
                            },
                            {
                              type: "image",
                              url: `${process.env.PATH_BACKEND}/image/svg/passIcon.png`,
                              size: "xxs",
                              aspectRatio: "1:1",
                              align: "start",
                              margin: "xs",
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
                                label: "ดูรายละเอียด",
                                uri: `${process.env.PATH_FRONT}/line/classify_detail/${classify.c_id}`,
                              },
                            },
                          ],
                          flex: 0,
                        },
                      },
                    },
                  ],
                },
              });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
};

const lineEvent = async (event: any) => {
  try {
    const uid = event.source.userId;
    let message = event.message.text;
    const image = event.message.type == "image";
    const userState = userStates[uid];
    console.log(message != "ข้อมูลพันธุ์ไม้" || message != "คู่มือ");

    if (
      (!userState || userState !== "waiting_for_check") &&
      message != "ข้อมูลพันธุ์ไม้" &&
      message != "คู่มือ"
    ) {
      if (message == "ตรวจสอบพันธุ์ไม้") {
        userStates[uid] = "waiting_for_check";
        const message_classify: any = {
          type: "text",
          text: "กรุณาอัปโหลดรูปหรือถ่ายภาพเพื่อใช้ในการตรวจสอบ",
          quickReply: {
            items: [
              {
                type: "action",
                action: {
                  type: "camera",
                  label: "Open Camera",
                },
              },
            ],
          },
        };
        return client.replyMessage(event.replyToken, message_classify);
      }
      return client.replyMessage(event.replyToken, {
        type: "text",
        text: "กรุณากดเมนูตรวจสอบก่อนทำการส่งรูปภาพ",
      });
      return;
    } else if (message == "ข้อมูลพันธุ์ไม้") {
      createWoodCarousel(uid, event);
    } else if (message == "คู่มือ") {
      createManualCarousel(uid, event);
    } else if (image) {
      createClassify(uid, event);
      delete userStates[uid];
    }
  } catch (error) {
    console.error(error);
  }
};
export default router;
