"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../global/prisma");
const line = __importStar(require("@line/bot-sdk"));
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const line_config_1 = require("../global/line/line_config");
const router = express_1.default.Router();
const client = new line.Client(line_config_1.lineConfig);
router.post("/webhook", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = req.body.events;
        lineEvent(events[0]);
        res.status(200).send("OK");
    }
    catch (err) {
        res.status(500).end();
    }
}));
const lineEvent = (event) => __awaiter(void 0, void 0, void 0, function* () {
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
        }
        else if (message == "ข้อมูลพันธุ์ไม้") {
            let objectBubble = [];
            const dataWood = yield prisma_1.prisma.wood_info.findMany();
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
                                                text: `${wood.place_of_origin.length > 100
                                                    ? wood.place_of_origin.slice(0, 97) + "..."
                                                    : wood.place_of_origin}`,
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
            yield axios_1.default.request({
                method: "POST",
                url: `${urlRequest}`,
                headers: {
                    Authorization: `Bearer ` + line_config_1.lineConfig.channelAccessToken,
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
        }
        else if (message == "คู่มือ") {
            urlRequest = `https://api.line.me/v2/bot/message/push`;
            yield axios_1.default.request({
                method: "POST",
                url: `${urlRequest}`,
                headers: {
                    Authorization: `Bearer ` + line_config_1.lineConfig.channelAccessToken,
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
        }
        else if (image) {
            let messageId = event.message.id;
            console.log(messageId);
            let urlRequestGetImage = `https://api-data.line.me/v2/bot/message/${messageId}/content`;
            let urlRequest = `https://api.line.me/v2/bot/message/push`;
            yield client.replyMessage(event.replyToken, {
                type: "text",
                text: "กำลังประมวลผลจากรูปภาพที่ส่งมา",
            });
            yield axios_1.default
                .request({
                method: "GET",
                url: `${urlRequestGetImage}`,
                headers: {
                    Authorization: `Bearer ` + line_config_1.lineConfig.channelAccessToken,
                },
                responseType: "arraybuffer",
            })
                .then((response) => {
                const imageBuffer = response.data;
                fs_1.default.writeFileSync(`./wood/${messageId}.jpg`, imageBuffer);
            })
                .catch((error) => {
                console.error("Error:", error);
            });
            yield axios_1.default.request({
                method: "POST",
                url: `${urlRequest}`,
                headers: {
                    Authorization: `Bearer ` + line_config_1.lineConfig.channelAccessToken,
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
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = router;
//# sourceMappingURL=LineWebhook.js.map