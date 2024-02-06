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
exports.getClassifyAllFilter = exports.getClassifyAllWithUserId = exports.getClassifyStatusByUserIdDonutChart = exports.getClassifyByUserIdDonutChart = exports.getClassifyWithWaitForVerifyWithUserId = exports.getClassifyWithDayWithUserId = exports.getPieChartStatusData = exports.getClassifyAll = exports.getClassifyWithVerify = exports.getClassifyToday = exports.updateClassify = exports.createClassifyDB = exports.getClassifyById = exports.getClassifyWithWaitForVerify = exports.getClassifyWithAll = exports.getClassifyWithDay = exports.getClassifyWithDate = exports.getClassifyCountByWood = void 0;
const prisma_1 = require("./prisma");
const prisma_query_user_1 = require("./prisma_query_user");
const cuid_1 = __importDefault(require("cuid"));
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
const getClassifyToday = (today) => __awaiter(void 0, void 0, void 0, function* () {
    today.setHours(0, 0, 0, 0);
    const result = yield prisma_1.prisma.classify.count({
        where: {
            create_at: {
                gte: today,
                lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
            },
        },
    });
    return result;
});
exports.getClassifyToday = getClassifyToday;
const getClassifyAll = (page, pageSize) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * pageSize;
    const data = yield prisma_1.prisma.classify.findMany({
        skip,
        take: pageSize,
        orderBy: {
            create_at: 'desc'
        }
    });
    const total = yield prisma_1.prisma.classify.count();
    return { data, total };
});
exports.getClassifyAll = getClassifyAll;
const getClassifyAllWithUserId = (page, pageSize, uid, filter = null) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * pageSize;
    const data = yield prisma_1.prisma.classify.findMany({
        skip,
        take: pageSize,
        where: Object.assign({ create_by: uid }, filter),
        orderBy: {
            create_at: 'desc'
        }
    });
    const total = yield prisma_1.prisma.classify.count({
        where: Object.assign({ create_by: uid }, filter)
    });
    return { data, total };
});
exports.getClassifyAllWithUserId = getClassifyAllWithUserId;
const getClassifyAllFilter = (page, pageSize, filter = null) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * pageSize;
    const data = yield prisma_1.prisma.classify.findMany({
        skip,
        take: pageSize,
        where: Object.assign({}, filter),
        orderBy: {
            create_at: 'desc'
        }
    });
    const total = yield prisma_1.prisma.classify.count({
        where: Object.assign({}, filter)
    });
    return { data, total };
});
exports.getClassifyAllFilter = getClassifyAllFilter;
const getPieChartStatusData = () => __awaiter(void 0, void 0, void 0, function* () {
    const counts = yield prisma_1.prisma.classify.groupBy({
        by: ['status_verify'],
        _count: {
            status_verify: true,
        }
    });
    return counts;
});
exports.getPieChartStatusData = getPieChartStatusData;
const getClassifyWithDay = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = yield prisma_1.prisma.classify.count({
        where: {
            create_at: {
                gte: today,
                lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
            },
        },
    });
    return result;
});
exports.getClassifyWithDay = getClassifyWithDay;
const getClassifyWithDayWithUserId = (u_id) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = yield prisma_1.prisma.classify.count({
        where: {
            create_at: {
                gte: today,
                lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
            },
            create_by: u_id
        },
    });
    return result;
});
exports.getClassifyWithDayWithUserId = getClassifyWithDayWithUserId;
const getClassifyWithAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.classify.count();
    return result;
});
exports.getClassifyWithAll = getClassifyWithAll;
const getClassifyById = (c_id) => __awaiter(void 0, void 0, void 0, function* () {
    const classify = yield prisma_1.prisma.classify.findFirst({
        where: {
            c_id: c_id,
        },
        include: {
            creator: true
        }
    });
    return classify;
});
exports.getClassifyById = getClassifyById;
const getClassifyWithWaitForVerify = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.classify.count({
        where: {
            status_verify: "WAITING_FOR_VERIFICATION",
        },
    });
    return result;
});
exports.getClassifyWithWaitForVerify = getClassifyWithWaitForVerify;
const getClassifyWithWaitForVerifyWithUserId = (u_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.classify.count({
        where: {
            status_verify: "WAITING_FOR_VERIFICATION",
            create_by: u_id
        },
    });
    return result;
});
exports.getClassifyWithWaitForVerifyWithUserId = getClassifyWithWaitForVerifyWithUserId;
const getClassifyWithVerify = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.classify.count({
        where: {
            status_verify: "PASSED_CERTIFICATION",
        },
    });
    return result;
});
exports.getClassifyWithVerify = getClassifyWithVerify;
const createClassifyDB = (prediction, line_id, imagePath) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = yield (0, prisma_query_user_1.getUserFromLineId)(line_id);
    return yield prisma_1.prisma.classify.create({
        data: {
            status: true,
            status_verify: "WAITING_FOR_VERIFICATION",
            select_result: prediction.prediction[0].wood,
            result: prediction.prediction,
            session_id_note_room: (0, cuid_1.default)(),
            create_by: userId.u_id,
            verify_by: null,
            image: imagePath,
        },
    });
});
exports.createClassifyDB = createClassifyDB;
const updateClassify = (c_id, location) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.classify.update({
        where: {
            c_id: c_id,
        },
        data: {
            location: location,
        },
    });
});
exports.updateClassify = updateClassify;
const getClassifyByUserIdDonutChart = (uid, filter = null) => __awaiter(void 0, void 0, void 0, function* () {
    const classifyData = yield prisma_1.prisma.classify.groupBy({
        by: ["select_result"],
        where: Object.assign({ create_by: uid }, filter),
        _count: {
            _all: true,
        },
    });
    return classifyData.map((group) => ({
        wood_name: group.select_result,
        amount: group._count._all,
    }));
});
exports.getClassifyByUserIdDonutChart = getClassifyByUserIdDonutChart;
const getClassifyStatusByUserIdDonutChart = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    const classifyData = yield prisma_1.prisma.classify.groupBy({
        by: ["status_verify"],
        where: {
            create_by: uid
        },
        _count: {
            _all: true,
        },
    });
    return classifyData.map((group) => ({
        status: group.status_verify == 'WAITING_FOR_VERIFICATION' ? 'รอการรับรอง' : group.status_verify == 'FAILED_CERTIFICATION' ? 'ไม่ผ่าน' : 'ผ่าน',
        amount: group._count._all,
    }));
});
exports.getClassifyStatusByUserIdDonutChart = getClassifyStatusByUserIdDonutChart;
//# sourceMappingURL=prisma_query_classify.js.map