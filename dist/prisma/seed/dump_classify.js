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
const axios_1 = __importDefault(require("axios"));
const prisma_1 = require("../../global/prisma");
const cuid_1 = __importDefault(require("cuid"));
const fs_1 = __importDefault(require("fs"));
const form_data_1 = __importDefault(require("form-data"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = [
            "แดง",
            "ประดู่",
            "แอ๊ก",
            "สัก",
            "รัง",
            "ยางนา",
            "ยางพารา",
            "พะยูง",
            "มะค่าโมง",
            "พะยอม",
            "ชิงชัน",
            "ตะเคียนทอง",
            "เต็ง",
            "บาเลา",
        ];
        const status = [
            "WAITING_FOR_VERIFICATION",
            "PASSED_CERTIFICATION",
            "FAILED_CERTIFICATION",
        ];
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
            const randomValueUser = Math.floor(Math.random() * 2);
            const userss = [
                "bfccfa60-d0ec-4d98-bb7d-2c7b66977591",
                "e66e6b82-5376-4a70-9a7a-1c07b5dd202d",
            ];
            const wood = data[Math.floor(Math.random() * 14)];
            const imagePath = `/image/imageData/${wood}.jpeg`;
            const formData = new form_data_1.default();
            let dataPrediction;
            formData.append("file", fs_1.default.createReadStream(`.${imagePath}`));
            yield axios_1.default
                .post(`${process.env.PATH_SERVICE_API}/analyze`, formData)
                .then((res) => __awaiter(this, void 0, void 0, function* () {
                dataPrediction = res.data;
                dataPrediction.prediction.sort((a, b) => b.percentage - a.percentage);
            }));
            yield prisma_1.prisma.classify.create({
                data: {
                    status: true,
                    status_verify: status[randomValueStatus],
                    select_result: wood,
                    result: dataPrediction.prediction,
                    session_id_note_room: (0, cuid_1.default)(),
                    create_at: new Date(`2024-${formattedMonths}-${formattedDays}`),
                    create_by: userss[randomValueUser],
                    verify_by: null,
                    image: imagePath,
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