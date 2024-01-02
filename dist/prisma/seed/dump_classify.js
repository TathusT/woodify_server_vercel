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
require("dotenv").config();
const prisma_1 = require("../../global/prisma");
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
        for (let i = 0; i < 500; i++) {
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
            yield prisma_1.prisma.classify.create({
                data: {
                    status: true,
                    status_verify: "WAITING_FOR_VERIFICATION",
                    select_result: randomValue,
                    result: [],
                    create_at: new Date(`2024-${formattedMonths}-${formattedDays}`),
                    create_by: "59f6b189-cf53-4d40-8b6c-ead95cdc164e",
                    verify_by: "59f6b189-cf53-4d40-8b6c-ead95cdc164e",
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