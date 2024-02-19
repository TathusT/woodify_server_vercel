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
Object.defineProperty(exports, "__esModule", { value: true });
exports.readMessage = exports.getNoteFromCid = exports.addNote = void 0;
const prisma_1 = require("./prisma");
const line = __importStar(require("@line/bot-sdk"));
const line_config_1 = require("../global/line/line_config");
const client = new line.Client(line_config_1.lineConfig);
const getNoteFromCid = (c_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.note.findMany({
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
});
exports.getNoteFromCid = getNoteFromCid;
const addNote = (description, c_id, u_id) => __awaiter(void 0, void 0, void 0, function* () {
    const createdNote = yield prisma_1.prisma.note.create({
        data: {
            description: description,
            c_id: c_id,
            create_by: u_id,
        },
    });
    const classify = yield prisma_1.prisma.classify.findFirst({
        where: {
            c_id: c_id,
        },
        include: {
            creator: true,
        },
    });
    // ดึงข้อมูลล่าสุดที่เพิ่มเข้าไป
    const fullNote = yield prisma_1.prisma.note.findFirst({
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
    const message = {
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
});
exports.addNote = addNote;
const readMessage = (uid, cid) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(uid, cid);
    const read = yield prisma_1.prisma.note.updateMany({
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
});
exports.readMessage = readMessage;
//# sourceMappingURL=prisma_query_note.js.map