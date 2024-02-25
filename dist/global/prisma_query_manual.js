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
exports.getAllManualWithFilter = exports.deleteManual = exports.updateManualNotImage = exports.updateManualImage = exports.getManual = exports.getAllManual = exports.createManual = void 0;
const prisma_1 = require("./prisma");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function createManual(topic, description, status, image, u_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const manual = yield prisma_1.prisma.manual.create({
                data: {
                    topic: topic,
                    description: description,
                    status: status,
                    image: image,
                    create_by: u_id,
                    update_by: u_id,
                },
            });
            console.log("Manual created:", manual);
        }
        catch (error) {
            console.error("Error creating manual:", error);
        }
        finally {
            yield prisma_1.prisma.$disconnect();
        }
    });
}
exports.createManual = createManual;
function updateManualNotImage(topic, description, status, u_id, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const manual = yield prisma_1.prisma.manual.update({
                where: {
                    m_id: id,
                },
                data: {
                    topic: topic,
                    description: description,
                    status: status,
                    update_by: u_id,
                },
            });
            console.log("Manual created:", manual);
        }
        catch (error) {
            console.error("Error creating manual:", error);
        }
        finally {
            yield prisma_1.prisma.$disconnect();
        }
    });
}
exports.updateManualNotImage = updateManualNotImage;
function updateManualImage(topic, description, status, image, u_id, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield getManual(id);
            const filenameToDelete = data[0].image; // ชื่อไฟล์ที่ต้องการลบ
            const uploadDirectory = "image/manual"; // โฟลเดอร์ที่รูปภาพถูกเก็บไว้
            const filePath = path_1.default.join(uploadDirectory, filenameToDelete);
            const manual = yield prisma_1.prisma.manual.update({
                where: {
                    m_id: id,
                },
                data: {
                    topic: topic,
                    description: description,
                    status: status,
                    image: image,
                    update_by: u_id,
                },
            });
            fs_1.default.unlink(filePath, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${err}`);
                    return;
                }
                console.log("File deleted successfully");
            });
            console.log("Manual created:", manual);
        }
        catch (error) {
            console.error("Error creating manual:", error);
        }
        finally {
            yield prisma_1.prisma.$disconnect();
        }
    });
}
exports.updateManualImage = updateManualImage;
function deleteManual(id, u_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma_1.prisma.users.findMany({
            where: {
                u_id: u_id,
            },
        });
        if (user[0].role == "EXPERT") {
            yield prisma_1.prisma.$transaction([
                prisma_1.prisma.manual.deleteMany({
                    where: {
                        m_id: id,
                    },
                }),
            ]);
        }
    });
}
exports.deleteManual = deleteManual;
function getAllManual() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma_1.prisma.manual.findMany();
    });
}
exports.getAllManual = getAllManual;
function getAllManualWithFilter(page, pageSize, filter = null, orderBy = null) {
    return __awaiter(this, void 0, void 0, function* () {
        const skip = (page - 1) * pageSize;
        const data = yield prisma_1.prisma.manual.findMany({
            skip,
            take: pageSize,
            where: Object.assign({}, filter),
            orderBy: Object.assign({}, orderBy // เรียงลำดับตามเวลาอัปเดตล่าสุด
            ),
        });
        const total = yield prisma_1.prisma.manual.count({
            where: Object.assign({}, filter),
        });
        return { data, total };
    });
}
exports.getAllManualWithFilter = getAllManualWithFilter;
function getManual(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma_1.prisma.manual.findMany({
            where: {
                m_id: id,
            },
        });
    });
}
exports.getManual = getManual;
//# sourceMappingURL=prisma_query_manual.js.map