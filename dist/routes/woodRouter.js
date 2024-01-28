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
const prisma_query_wood_1 = require("../global/prisma_query_wood");
const token_manager_1 = require("../global/token_manager");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
require('dotenv').config();
const router = express_1.default.Router();
const uploadDirectory = "image/wood_image";
if (!fs_1.default.existsSync(uploadDirectory)) {
    fs_1.default.mkdirSync(uploadDirectory);
}
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const uploadedFilename = file.fieldname + "-" + uniqueSuffix + path_1.default.extname(file.originalname);
        cb(null, uploadedFilename);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
router.get('/wood', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wood = yield (0, prisma_query_wood_1.getWoodInfo)();
        res.json(wood);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.get('/wood/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const woodId = req.params.id;
        const wood = yield (0, prisma_query_wood_1.getWoodInfoOne)(woodId);
        res.json(wood);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.put('/wood_update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const common_name = data.common_name;
        const eng_name = data.eng_name;
        const botanical_name = data.botanical_name;
        const pedigree = data.pedigree;
        const place_of_origin = data.place_of_origin;
        const wood_characteristics = data.wood_characteristics;
        const anatomical_characteristics = data.anatomical_characteristics;
        const other = data.other;
        const token = data.token;
        const status = data.status;
        const w_id = data.id;
        const u_id = yield (0, token_manager_1.decryptAccessToken)(token);
        yield (0, prisma_query_wood_1.updateWoodInfoNoImage)(common_name, eng_name, botanical_name, pedigree, place_of_origin, wood_characteristics, anatomical_characteristics, other, status, w_id, u_id);
        res.status(200).json({ message: "update success" });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.post('/wood', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const common_name = data.common_name;
        const eng_name = data.eng_name;
        const botanical_name = data.botanical_name;
        const pedigree = data.pedigree;
        const place_of_origin = data.place_of_origin;
        const wood_characteristics = data.wood_characteristics;
        const anatomical_characteristics = data.anatomical_characteristics;
        const other = data.other;
        const token = data.token;
        const status = data.status;
        const u_id = yield (0, token_manager_1.decryptAccessToken)(token);
        const data_wood = yield (0, prisma_query_wood_1.createWoodInfo)(common_name, eng_name, botanical_name, pedigree, place_of_origin, wood_characteristics, anatomical_characteristics, other, status, u_id);
        res.status(200).json({ message: "create success", data: data_wood });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.put('/wood_image', upload.array("files"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const w_id = req.body.id;
        const uploadedFilenames = req.files.map(file => file.filename);
        let status = yield (0, prisma_query_wood_1.updateWoodImage)(uploadedFilenames, w_id);
        return status;
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.post('/image_wood_delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const w_id = data.id;
        const deleteImage = data.delete_image;
        yield (0, prisma_query_wood_1.deleteImageWood)(w_id, deleteImage);
        res.status(200).json({ message: "delete success" });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.delete('/wood_delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const token = data.token;
        const w_id = data.id;
        const u_id = yield (0, token_manager_1.decryptAccessToken)(token);
        yield (0, prisma_query_wood_1.deleteWoodInfo)(w_id, u_id.id);
        res.status(200).json({ message: "delete success" });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
//# sourceMappingURL=woodRouter.js.map