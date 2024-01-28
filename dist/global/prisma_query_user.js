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
exports.getAllUser = exports.getUserFromUserId = exports.getUserFromLineId = void 0;
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
const getUserFromUserId = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.users.findFirst({
        where: {
            u_id: uid,
        },
        select: {
            role: true,
        },
    });
});
exports.getUserFromUserId = getUserFromUserId;
//# sourceMappingURL=prisma_query_user.js.map