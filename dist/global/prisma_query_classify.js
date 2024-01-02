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
exports.getClassifyWithWaitForVerify = exports.getClassifyWithAll = exports.getClassifyWithDay = exports.getClassifyWithDate = exports.getClassifyCountByWood = void 0;
const prisma_1 = require("./prisma");
function getClassifyCountByWood(dateFrom, dateTo) {
    return __awaiter(this, void 0, void 0, function* () {
        const dateFromIso = new Date(dateFrom);
        const dateToIso = new Date(dateTo);
        const classifyData = yield prisma_1.prisma.classify.groupBy({
            by: ["select_result"],
            where: {
                create_at: {
                    gte: dateFromIso,
                    lte: dateToIso,
                },
            },
            _count: {
                _all: true,
            },
        });
        return classifyData.map((group) => ({
            wood_name: group.select_result,
            amount: group._count._all,
        }));
    });
}
exports.getClassifyCountByWood = getClassifyCountByWood;
const getClassifyWithDate = (dateFrom, dateTo) => __awaiter(void 0, void 0, void 0, function* () {
    const dateFromIso = new Date(dateFrom);
    const dateToIso = new Date(dateTo);
    const months = [
        { short: "ม.ค", full: "มกราคม" },
        { short: "ก.พ", full: "กุมภาพันธ์" },
        { short: "มี.ค", full: "มีนาคม" },
        { short: "เม.ย", full: "เมษายน" },
        { short: "พ.ค", full: "พฤษภาคม" },
        { short: "มิ.ย", full: "มิถุนายน" },
        { short: "ก.ค", full: "กรกฎาคม" },
        { short: "ส.ค", full: "สิงหาคม" },
        { short: "ก.ย", full: "กันยายน" },
        { short: "ต.ค", full: "ตุลาคม" },
        { short: "พ.ย", full: "พฤศจิกายน" },
        { short: "ธ.ค", full: "ธันวาคม" },
    ];
    const classifyData = yield prisma_1.prisma.classify.findMany({
        where: {
            create_at: {
                gte: dateFromIso,
                lte: dateToIso,
            },
        },
    });
    const resultMap = new Map();
    classifyData.forEach((entry) => {
        const createAtDate = new Date(entry.create_at);
        const month = createAtDate.getMonth();
        const key = `${entry.select_result}-${month}`;
        // หากมี key นี้ใน Map แล้ว ให้เพิ่มค่า count
        if (resultMap.has(key)) {
            resultMap.set(key, resultMap.get(key) + 1);
        }
        else {
            resultMap.set(key, 1);
        }
    });
    const resultData = [];
    resultMap.forEach((count, key) => {
        const [name, month] = key.split("-");
        resultData.push({
            name: name,
            month: months[parseInt(month)].short,
            count: count,
        });
    });
    resultData.sort((a, b) => {
        const monthOrder = months.findIndex((month) => month.short === a.month) -
            months.findIndex((month) => month.short === b.month);
        return monthOrder || a.count - b.count;
    });
    return resultData;
});
exports.getClassifyWithDate = getClassifyWithDate;
const getClassifyWithDay = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = yield prisma_1.prisma.classify.count({
        where: {
            create_at: {
                gte: today, // มากกว่าหรือเท่ากับวันที่เท่ากับวันนี้
                lt: new Date(today.getTime() + 24 * 60 * 60 * 1000), // น้อยกว่าวันพรุ่งนี้
            },
        },
    });
    return result;
});
exports.getClassifyWithDay = getClassifyWithDay;
const getClassifyWithAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.classify.count();
    return result;
});
exports.getClassifyWithAll = getClassifyWithAll;
const getClassifyWithWaitForVerify = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.classify.count({
        where: {
            status_verify: "WAITING_FOR_VERIFICATION"
        }
    });
    return result;
});
exports.getClassifyWithWaitForVerify = getClassifyWithWaitForVerify;
//# sourceMappingURL=prisma_query_classify.js.map