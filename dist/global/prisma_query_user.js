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
exports.updateUser = exports.activeUser = exports.getAllUserWithFilter = exports.banUser = exports.deleteUser = exports.createExpert = exports.setUserData = exports.getCountExpert = exports.getUserWithEmail = exports.getUserToday = exports.updateRoleFromId = exports.getAllUser = exports.getUserFromUserId = exports.getUserFromLineId = void 0;
const prisma_1 = require("./prisma");
const getUserFromLineId = (lineid) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.findFirst({
        where: {
            line_id: lineid,
        },
        select: {
            u_id: true,
        },
    });
});
exports.getUserFromLineId = getUserFromLineId;
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.findMany();
});
exports.getAllUser = getAllUser;
const getUserToday = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = yield prisma_1.prisma.users.count({
        where: {
            create_at: {
                gte: today, // มากกว่าหรือเท่ากับวันที่เท่ากับวันนี้
                lt: new Date(today.getTime() + 24 * 60 * 60 * 1000), // น้อยกว่าวันพรุ่งนี้
            },
        },
    });
    return result;
});
exports.getUserToday = getUserToday;
const getUserFromUserId = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.findFirst({
        where: {
            u_id: uid,
        },
    });
});
exports.getUserFromUserId = getUserFromUserId;
const updateRoleFromId = (uid, role) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.update({
        where: {
            u_id: uid,
        },
        data: {
            role: role,
        },
    });
});
exports.updateRoleFromId = updateRoleFromId;
const getUserWithEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.findFirst({
        where: {
            email: email,
        },
    });
});
exports.getUserWithEmail = getUserWithEmail;
const getCountExpert = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.count({
        where: {
            role: "EXPERT",
        },
    });
});
exports.getCountExpert = getCountExpert;
const setUserData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.update({
        where: {
            line_id: data.line_id,
        },
        data: {
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            email: data.email,
            verify_data: true,
        },
    });
});
exports.setUserData = setUserData;
const createExpert = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.create({
        data: query,
    });
});
exports.createExpert = createExpert;
const deleteUser = (u_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.update({
        data: {
            status: "DELETE",
        },
        where: {
            u_id: u_id,
        },
    });
});
exports.deleteUser = deleteUser;
const banUser = (u_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.update({
        data: {
            status: "BAN",
        },
        where: {
            u_id: u_id,
        },
    });
});
exports.banUser = banUser;
const activeUser = (u_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.update({
        data: {
            status: "ACTIVE",
        },
        where: {
            u_id: u_id,
        },
    });
});
exports.activeUser = activeUser;
const getAllUserWithFilter = (page, pageSize, filter = null) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * pageSize;
    const data = yield prisma_1.prisma.users.findMany({
        skip,
        take: pageSize,
        where: Object.assign({}, filter),
    });
    const total = yield prisma_1.prisma.users.count({
        where: Object.assign({}, filter),
    });
    return { data, total };
});
exports.getAllUserWithFilter = getAllUserWithFilter;
const updateUser = (data, u_id) => __awaiter(void 0, void 0, void 0, function* () {
    if (data.email) {
        const checkEmail = yield prisma_1.prisma.users.findMany({
            where: {
                email: data.email,
            },
        });
        if (checkEmail.length != 0) {
            return "email is taken";
        }
    }
    if (data.phone) {
        const checkPhone = yield prisma_1.prisma.users.findMany({
            where: {
                phone: data.phone,
            },
        });
        if (checkPhone.length != 0) {
            return "phone is taken";
        }
    }
    const user = yield prisma_1.prisma.users.update({
        where: {
            u_id: u_id,
        },
        data: Object.assign({}, data),
    });
    return user; // คืนค่า user หลังจากที่อัปเดตข้อมูลเสร็จสมบูรณ์
});
exports.updateUser = updateUser;
//# sourceMappingURL=prisma_query_user.js.map