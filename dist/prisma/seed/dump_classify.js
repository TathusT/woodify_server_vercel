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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const prisma_1 = require("../../global/prisma");
const cuid_1 = __importDefault(require("cuid"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = [
            "แดง",
            "ชุมแพรก",
            "แอ๊ก",
            "สัก",
            "รัง",
            "ยาง",
            "ยางพารา",
            "พะยูง",
            "มะค่าโมง",
            "พะยอม",
            "ตะเคียนราก",
            "ตะเคียนทอง",
            "เต็ง",
        ];
        const status = ['WAITING_FOR_VERIFICATION', 'PASSED_CERTIFICATION', 'FAILED_CERTIFICATION'];
        for (let i = 0; i < 8000; i++) {
            const randomIndex = Math.floor(Math.random() * data.length);
            let randomMonth = Math.floor(Math.random() * 12) + 1;
            const days = Math.floor(Math.random() * 27) + 1;
            const formattedDays = days < 10 ? `0${days}` : `${days}`;
            const randomValue = data[randomIndex];
            if (randomMonth > 12) {
                randomMonth = 12;
            }
            else if (randomMonth == 0) {
                randomMonth = 1;
            }
            const formattedMonths = randomMonth < 10 ? `0${randomMonth}` : `${randomMonth}`;
            console.log(formattedDays, formattedMonths);
            const randomValueStatus = Math.floor(Math.random() * 3);
            yield prisma_1.prisma.classify.create({
                data: {
                    status: true,
                    status_verify: status[randomValueStatus],
                    select_result: data[Math.floor(Math.random() * 13)],
                    result: [],
                    session_id_note_room: (0, cuid_1.default)(),
                    create_at: new Date(`2024-${formattedMonths}-${formattedDays}`),
                    create_by: "149d4147-ebca-4512-bd8f-087a03a55570",
                    verify_by: null,
                    image: ''
                },
            });
        }
    });
}
main()
    .catch((e) => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.$disconnect();
}));
//# sourceMappingURL=dump_classify.js.map