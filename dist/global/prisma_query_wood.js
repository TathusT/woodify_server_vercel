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
exports.deleteWoodInfo = exports.getWoodInfoOne = exports.updateWoodInfoNoImage = exports.getWoodInfo = void 0;
const prisma_1 = require("./prisma");
function getWoodInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma_1.prisma.wood_info.findMany({
            include: {
                wood_image: true,
            },
        });
    });
}
exports.getWoodInfo = getWoodInfo;
function getWoodInfoOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma_1.prisma.wood_info.findMany({
            where: {
                w_id: id,
            },
            include: {
                wood_image: true,
            },
        });
    });
}
exports.getWoodInfoOne = getWoodInfoOne;
function updateWoodInfoNoImage(common_name, eng_name, botanical_name, pedigree, place_of_origin, wood_characteristics, anatomical_characteristics, other, status, id, u_id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_1.prisma.wood_info.update({
            where: {
                w_id: id,
            },
            data: {
                common_name: common_name,
                eng_name: eng_name,
                botanical_name: botanical_name,
                pedigree: pedigree,
                place_of_origin: place_of_origin,
                wood_characteristics: wood_characteristics,
                anatomical_characteristics: anatomical_characteristics,
                other: other,
                status: status,
                update_by: u_id,
            },
        });
    });
}
exports.updateWoodInfoNoImage = updateWoodInfoNoImage;
function deleteWoodInfo(id, u_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma_1.prisma.users.findMany({
            where: {
                u_id: u_id,
            },
        });
        if (user[0].role == "EXPERT") {
            yield prisma_1.prisma.$transaction([
                prisma_1.prisma.wood_Image.deleteMany({
                    where: {
                        w_id: id,
                    },
                }),
                prisma_1.prisma.wood_info.delete({
                    where: {
                        w_id: id,
                    },
                }),
            ]);
        }
    });
}
exports.deleteWoodInfo = deleteWoodInfo;
//# sourceMappingURL=prisma_query_wood.js.map