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
const form_data_1 = __importDefault(require("form-data"));
const line_config_1 = require("../global/line/line_config");
const prisma_query_wood_1 = require("../global/prisma_query_wood");
const prisma_query_classify_1 = require("../global/prisma_query_classify");
const router = express_1.default.Router();
const client = new line.Client(line_config_1.lineConfig);
const userStates = {};
router.post("/webhook", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = req.body.events;
        // console.log(events);
        lineEvent(events[0]);
        res.status(200).send("OK");
    }
    catch (err) {
        res.status(500).end();
    }
}));
const createWoodCarousel = (uid, event) => __awaiter(void 0, void 0, void 0, function* () {
    const objectBubble = [];
    const dataWood = yield (0, prisma_query_wood_1.getWoodInfoLine)();
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
    }
    else {
        sliceWood = dataWood;
    }
    sliceWood.forEach((wood) => {
        var _a;
        objectBubble.push({
            type: "bubble",
            hero: {
                type: "image",
                url: `${process.env.PATH_BACKEND}${(_a = wood.wood_image[0]) === null || _a === void 0 ? void 0 : _a.path}`,
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
                url: `/image/icon/more_wood.png`,
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
});
const createManualCarousel = (uid, event) => __awaiter(void 0, void 0, void 0, function* () {
    let objectBubble = [];
    let sliceManual;
    let more = false;
    let max = 11;
    const dataManual = yield prisma_1.prisma.manual.findMany({
        where: {
            status: true
        }
    });
    if (dataManual.length == 0 || dataManual == null) {
        return client.replyMessage(event.replyToken, {
            type: "text",
            text: "ขณะนี้ยังไม่มีข้อมูลคู่มือ",
        });
    }
    if (dataManual.length > max) {
        sliceManual = dataManual.slice(0, max);
    }
    else {
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
                url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4IuDW4CkzB5rwYtOm_YuCZmnDVPdi8IZMQ&usqp=CAU`,
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
        const response = yield axios_1.default.post(urlRequest, {
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
        }, {
            headers: {
                Authorization: `Bearer ` + line_config_1.lineConfig.channelAccessToken,
                "Content-Type": "application/json",
            },
        });
        console.log("LINE API response:", response.data);
    }
    catch (error) {
        console.error("Error sending message to LINE API:", error.message);
    }
});
const createClassify = (uid, event) => __awaiter(void 0, void 0, void 0, function* () {
    let dataPrediction;
    try {
        let messageId = event.message.id;
        let urlRequestGetImage = `https://api-data.line.me/v2/bot/message/${messageId}/content`;
        let urlRequest = `https://api.line.me/v2/bot/message/push`;
        client.pushMessage(uid, {
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
            .then((response) => __awaiter(void 0, void 0, void 0, function* () {
            const imagePath = `/image/classify_image/${messageId}.jpg`;
            const imageBuffer = response.data;
            fs_1.default.writeFileSync(`./image/classify_image/${messageId}.jpg`, imageBuffer);
            const formData = new form_data_1.default();
            formData.append("file", fs_1.default.createReadStream(`.${imagePath}`));
            yield axios_1.default
                .post(`${process.env.PATH_SERVICE_API}/analyze`, formData)
                .then((res) => __awaiter(void 0, void 0, void 0, function* () {
                dataPrediction = res.data;
                dataPrediction.prediction.sort((a, b) => b.percentage - a.percentage);
                console.log(dataPrediction);
                if (dataPrediction.prediction[0].percentage < 50) {
                    try {
                        client.replyMessage(event.replyToken, {
                            type: "text",
                            text: "รูปภาพไม่สามารถวิเคราะห์ได้ กรุณาส่งรูปภาพใหม่ โปรดตรวจสอบความละเอียดของภาพและต่ำแหน่งของหน้าตัดไม้",
                        });
                        yield fs_1.default.promises.unlink(`.${imagePath}`);
                        console.log(`File deleted: ${imagePath}`);
                    }
                    catch (error) {
                        if (error.response) {
                            console.error(`Line API Error: ${error.response.status} - ${error.response.statusText}`);
                        }
                        else if (error.request) {
                            console.error("No response received from Line API");
                        }
                        else {
                            console.error(`Error: ${error.message}`);
                        }
                    }
                }
                else {
                    const classify = yield (0, prisma_query_classify_1.createClassifyDB)(dataPrediction, uid, imagePath);
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
            }))
                .catch((err) => {
                console.error(err);
            });
        }))
            .catch((error) => {
            console.error("Error:", error);
        });
    }
    catch (error) {
        console.log(error);
    }
});
const lineEvent = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uid = event.source.userId;
        let message = event.message.text;
        const image = event.message.type == "image";
        const userState = userStates[uid];
        console.log((message != 'ข้อมูลพันธุ์ไม้' || message != 'คู่มือ'));
        if ((!userState || userState !== "waiting_for_check") && (message != 'ข้อมูลพันธุ์ไม้' && message != 'คู่มือ')) {
            if (message == "ตรวจสอบพันธุ์ไม้") {
                userStates[uid] = "waiting_for_check";
                return client.replyMessage(event.replyToken, {
                    type: "text",
                    text: "กรุณาอัปโหลดรูปหรือถ่ายภาพเพื่อใช้ในการตรวจสอบ",
                });
            }
            return client.replyMessage(event.replyToken, {
                type: "text",
                text: "กรุณากดเมนูตรวจสอบก่อนทำการส่งรูปภาพ",
            });
            return;
        }
        else if (message == "ข้อมูลพันธุ์ไม้") {
            createWoodCarousel(uid, event);
        }
        else if (message == "คู่มือ") {
            createManualCarousel(uid, event);
        }
        else if (image) {
            createClassify(uid, event);
            delete userStates[uid];
        }
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = router;
//# sourceMappingURL=LineWebhook.js.map