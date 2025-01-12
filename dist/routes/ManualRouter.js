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
const express_1 = __importDefault(require("express"));
const prisma_query_manual_1 = require("../global/prisma_query_manual");
const token_manager_1 = require("../global/token_manager");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
require("dotenv").config();
const router = express_1.default.Router();
const uploadDirectory = "image/manual";
let uploadedFilename;
if (!fs_1.default.existsSync(uploadDirectory)) {
    fs_1.default.mkdirSync(uploadDirectory);
}
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        uploadedFilename =
            file.fieldname + "-" + uniqueSuffix + path_1.default.extname(file.originalname);
        cb(null, uploadedFilename);
    },
});
const upload = (0, multer_1.default)({ storage: storage, limits: { fieldSize: 25 * 1024 * 1024 } });
router.post("/create_manual", upload.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const topic = data.title;
        const description = data.body;
        const status = data.status == "true" ? true : false;
        const token = data.token;
        const u_id = yield (0, token_manager_1.decryptAccessToken)(token);
        yield (0, prisma_query_manual_1.createManual)(topic, description, status, uploadedFilename, u_id.id);
        res.status(200).json({ message: "create success" });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/edit_manual_noupdateImage", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const topic = data.title;
        const description = data.body;
        const status = data.status == true ? true : false;
        const token = data.token;
        const u_id = yield (0, token_manager_1.decryptAccessToken)(token);
        const id = data.id;
        yield (0, prisma_query_manual_1.updateManualNotImage)(topic, description, status, u_id.id, id);
        res.status(200).json({ message: "update success" });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/edit_manual_updateImage", upload.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const topic = data.title;
        const description = data.body;
        const status = data.status == true ? true : false;
        const token = data.token;
        const u_id = yield (0, token_manager_1.decryptAccessToken)(token);
        const id = data.id;
        yield (0, prisma_query_manual_1.updateManualImage)(topic, description, status, uploadedFilename, u_id.id, id);
        res.status(200).json({ message: "update success" });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/all_manual", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const manual = yield (0, prisma_query_manual_1.getAllManual)();
        res.status(200).json(manual);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/all_manual_filter", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const pageSize = data.pageSize;
        const currentPage = data.currentPage;
        const filter = data.filter;
        const orderBy = data.orderBy;
        const manual = yield (0, prisma_query_manual_1.getAllManualWithFilter)(parseInt(currentPage), parseInt(pageSize), filter, orderBy);
        res.status(200).json(manual);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/manual/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const manualId = req.params.id;
        const manual = yield (0, prisma_query_manual_1.getManual)(manualId);
        res.status(200).json(manual);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/manual_delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const token = data.token;
        const m_id = data.m_id;
        console.log(data);
        const u_id = yield (0, token_manager_1.decryptAccessToken)(token);
        yield (0, prisma_query_manual_1.deleteManual)(m_id, u_id.id);
        res.status(200).json({ message: "delete success" });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = router;
//# sourceMappingURL=ManualRouter.js.map