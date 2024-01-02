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
const prisma_query_classify_1 = require("../global/prisma_query_classify");
require("dotenv").config();
const router = express_1.default.Router();
router.get("/dashboard_classify_column/:dateFrom/:dateTo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dateFrom = req.params.dateFrom.replace(/-/g, '/');
        const dateTo = req.params.dateTo.replace(/-/g, '/');
        const classify = yield (0, prisma_query_classify_1.getClassifyCountByWood)(dateFrom, dateTo);
        res.status(200).json(classify);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/dashboard_classify_line/:dateFrom/:dateTo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dateFrom = req.params.dateFrom.replace(/-/g, '/');
    const dateTo = req.params.dateTo.replace(/-/g, '/');
    try {
        const classify = yield (0, prisma_query_classify_1.getClassifyWithDate)(dateFrom, dateTo);
        res.status(200).json(classify);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get('/classify_today', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, prisma_query_classify_1.getClassifyWithDay)();
    res.status(200).json(data);
}));
router.get('/classify_all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, prisma_query_classify_1.getClassifyWithAll)();
    res.status(200).json(data);
}));
router.get('/classify_wait_for_verify', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, prisma_query_classify_1.getClassifyWithWaitForVerify)();
    res.status(200).json(data);
}));
exports.default = router;
//# sourceMappingURL=ClassifyRouter.js.map