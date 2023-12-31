import express from "express";
import { Router } from "express";
import { prisma } from "../global/prisma";
import dotenv from "dotenv";
import * as line from "@line/bot-sdk";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { lineConfig } from "../global/line/line_config";
const router: Router = express.Router();


const client = new line.Client(lineConfig);

router.post("/webhook", async (req, res) => {
  try {
    const events = req.body.events;
    lineEvent(events[0]);
    res.status(200).send("OK");
  } catch (err) {
    res.status(500).end();
  }
});

const lineEvent = async (event: any) => {
  try {
    const uid = event.source.userId;
    let message = event.message.text;
    const image = event.message.type == "image";
    let urlRequest;
    if (message == "ตรวจสอบพันธุ์ไม้") {
      console.log(1);
      return client.replyMessage(event.replyToken, {
        type: "text",
        text: "กรุณาอัปโหลดรูปหรือถ่ายภาพเพื่อใช้ในการตรวจสอบ",
      });
    } else if (message == "ข้อมูลพันธุ์ไม้") {
      let objectBubble: any = [];
      const dataWood = await prisma.wood_info.findMany();
      dataWood.forEach((wood) => {
        objectBubble.push({
          type: "bubble",
          hero: {
            type: "image",
            url: `${'https://cdn.discordapp.com/attachments/841948735419842580/1148478321814941696/IMG_1827.png?ex=656eaa49&is=655c3549&hm=de51c84082f665800c458e66104775e85de866dcaed4d8941d60f767a58c759e&'}`,
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              uri: `http://woodify.bacoomwork.com/line/wood_detail/${wood.w_id}`,
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
                  uri: `http://woodify.bacoomwork.com/line/wood_detail/${wood.w_id}`,
                },
              },
            ],
            flex: 0,
          },
        });
      });
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
    } else if (message == "คู่มือ") {
      urlRequest = `https://api.line.me/v2/bot/message/push`;
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
                type: "carousel",
                contents: [
                  {
                    type: "bubble",
                    header: {
                      type: "box",
                      layout: "vertical",
                      contents: [],
                    },
                    hero: {
                      type: "image",
                      size: "full",
                      aspectRatio: "20:13",
                      aspectMode: "fit",
                      action: {
                        type: "uri",
                        uri: "http://linecorp.com/",
                      },
                      url: "https://cdn.discordapp.com/attachments/1164432843120836628/1164432864536973322/image.png?ex=6543319d&is=6530bc9d&hm=cfd8b8eeec05f8ad4005b37065c3ce6794135a5162ed53b55d7daf96a9ab608d&",
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
                          text: "การใช้งานระบบเบิ้องต้น",
                          weight: "bold",
                          size: "xl",
                          align: "center",
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
                            uri: "https://linecorp.com",
                          },
                        },
                      ],
                      flex: 0,
                    },
                  },
                  {
                    type: "bubble",
                    header: {
                      type: "box",
                      layout: "vertical",
                      contents: [],
                    },
                    hero: {
                      type: "image",
                      size: "full",
                      aspectRatio: "20:13",
                      aspectMode: "fit",
                      action: {
                        type: "uri",
                        uri: "http://linecorp.com/",
                      },
                      url: "https://cdn.discordapp.com/attachments/1164432843120836628/1164439257306382356/image.png?ex=65433791&is=6530c291&hm=f5ddcd4be5e8c37e7ed96b0cac1c4d9fda4ee8f2d9beb95205354354a08eb070&",
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
                          text: "การดูลักษณะไม้เบื้องต้น",
                          weight: "bold",
                          size: "xl",
                          align: "center",
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
                            uri: "https://linecorp.com",
                          },
                        },
                      ],
                      flex: 0,
                    },
                  },
                  {
                    type: "bubble",
                    header: {
                      type: "box",
                      layout: "vertical",
                      contents: [],
                    },
                    hero: {
                      type: "image",
                      size: "full",
                      aspectRatio: "20:13",
                      aspectMode: "fit",
                      action: {
                        type: "uri",
                        uri: "http://linecorp.com/",
                      },
                      url: "https://cdn.discordapp.com/attachments/1164432843120836628/1164439305738010645/image.png?ex=6543379c&is=6530c29c&hm=914122a675af8d982570422d56e9a59dbc91f49a4fc304904f4d81f2a8be93b3&",
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
                          text: "การจัดเตรียมไม้เพื่อพิสูจน์",
                          weight: "bold",
                          size: "xl",
                          align: "center",
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
                            uri: "https://linecorp.com",
                          },
                        },
                      ],
                      flex: 0,
                    },
                  },
                ],
              },
            },
          ],
        },
      });
    } else if (image) {
      let messageId = event.message.id;
      console.log(messageId);
      let urlRequestGetImage = `https://api-data.line.me/v2/bot/message/${messageId}/content`;
      let urlRequest = `https://api.line.me/v2/bot/message/push`;
      await client.replyMessage(event.replyToken, {
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
        .then((response) => {
          const imageBuffer = response.data;
          fs.writeFileSync(`./wood/${messageId}.jpg`, imageBuffer);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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
                    uri: "https://woodify.bacoomwork.com/line/classify_detail",
                  },
                  url: `https://5c0b-110-171-24-27.ngrok-free.app/wood/${messageId}.jpg`,
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
                      text: "ไม้ประดู่",
                      weight: "bold",
                      size: "xl",
                      align: "start",
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
                        uri: "https://woodify.bacoomwork.com/line/classify_detail",
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
  } catch (error) {
    console.error(error);
  }
};
export default router;