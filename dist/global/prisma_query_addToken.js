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
exports.checkTimeLinkInvite = exports.addTokenInvited = void 0;
const prisma_1 = require("./prisma");
const addTokenInvited = (inviteBy, inviteTo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.add_Token.create({
        data: {
            invited_by: inviteBy,
            invited_to: inviteTo,
        },
    });
});
exports.addTokenInvited = addTokenInvited;
const checkTimeLinkInvite = (a_id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.prisma.add_Token.findUnique({
        where: { a_id: a_id },
    });
    if (data && data.time_out && new Date() > new Date(data.time_out)) {
        return { message: "timeout", data: data };
    }
    else {
        const checkAndUpdate = yield prisma_1.prisma.users.findFirst({
            where: {
                email: data.invited_to
            }
        });
        if (checkAndUpdate != null && checkAndUpdate.verify_data != false) {
            yield prisma_1.prisma.users.update({
                where: {
                    email: data.invited_to
                },
                data: {
                    role: 'EXPERT'
                }
            });
            return { message: "update success", data: data, userid: checkAndUpdate.u_id };
        }
        return { message: "not timeout", data: data };
    }
});
exports.checkTimeLinkInvite = checkTimeLinkInvite;
//# sourceMappingURL=prisma_query_addToken.js.map