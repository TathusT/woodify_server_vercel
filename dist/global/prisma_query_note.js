"use strict";
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
exports.getNoteFromCid = exports.addNote = void 0;
const prisma_1 = require("./prisma");
const getNoteFromCid = (c_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.note.findMany({
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
    return fullNote;
});
exports.addNote = addNote;
//# sourceMappingURL=prisma_query_note.js.map