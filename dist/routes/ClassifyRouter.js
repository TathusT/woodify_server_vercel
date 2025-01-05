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
const prisma_query_user_1 = require("../global/prisma_query_user");
const middleware_1 = __importDefault(require("../middleware/middleware"));
require("dotenv").config();
const router = express_1.default.Router();
router.post("/dashboard/classify/column", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let filter = req.body;
        const classify = yield (0, prisma_query_classify_1.getClassifyCountByWood)(filter);
        res.status(200).json(classify);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/dashboard/classify/line", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.body;
        const classify = yield (0, prisma_query_classify_1.getClassifyWithDate)(filter);
        res.status(200).json(classify);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/get_classiy_today", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    try {
        const classifyCount = yield (0, prisma_query_classify_1.getClassifyToday)(today);
        res.status(200).json(classifyCount);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/classify/summary", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    try {
        const classifyCount = yield (0, prisma_query_classify_1.getClassifyToday)(today);
        const classifyAll = yield (0, prisma_query_classify_1.getClassifyWithAll)();
        const classifyWaitForVerify = yield (0, prisma_query_classify_1.getClassifyWithWaitForVerify)();
        const userToday = yield (0, prisma_query_user_1.getUserToday)();
        res.status(200).json({
            classifyToday: classifyCount,
            classifyAll: classifyAll,
            classifyWaitForVerify: classifyWaitForVerify,
            userToday: userToday
        });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/get_classiy_status", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classifyCount = yield (0, prisma_query_classify_1.getPieChartStatusData)();
        res.status(200).json(classifyCount);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/classify/:c_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const c_id = req.params.c_id;
    try {
        const classify = yield (0, prisma_query_classify_1.getClassifyById)(c_id);
        res.status(200).json(classify);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/classify/:currentPage/:pageSize", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.params.currentPage;
        const pageSize = req.params.pageSize;
        const classify = yield (0, prisma_query_classify_1.getClassifyAll)(parseInt(page), parseInt(pageSize));
        res.status(200).json(classify);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/classify", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const page = data.currentPage;
        const pageSize = data.pageSize;
        const filter = data.filter;
        const classify = yield (0, prisma_query_classify_1.getClassifyAllFilter)(parseInt(page), parseInt(pageSize), filter);
        res.status(200).json(classify);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/classify_user_id/:currentPage/:pageSize/:u_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.params.currentPage;
        const pageSize = req.params.pageSize;
        const uid = req.params.u_id;
        const classify = yield (0, prisma_query_classify_1.getClassifyAllWithUserId)(parseInt(page), parseInt(pageSize), uid);
        res.status(200).json(classify);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/classify_user_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const page = data.currentPage;
        const pageSize = data.pageSize;
        const uid = data.u_id;
        // console.log(uid);
        const filter = data.filter;
        const classify = yield (0, prisma_query_classify_1.getClassifyAllWithUserId)(parseInt(page), parseInt(pageSize), uid, filter);
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
router.get('/classify_today_with_user_id/:u_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u_id = req.params.u_id;
    const data = yield (0, prisma_query_classify_1.getClassifyWithDayWithUserId)(u_id);
    res.status(200).json(data);
}));
router.get('/classify_all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, prisma_query_classify_1.getClassifyWithAll)();
    res.status(200).json(data);
}));
router.get('/classify_verify', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, prisma_query_classify_1.getClassifyWithAll)();
    res.status(200).json(data);
}));
router.get('/classify_wait_for_verify', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, prisma_query_classify_1.getClassifyWithWaitForVerify)();
    res.status(200).json(data);
}));
router.get('/classify_wait_for_verify/:u_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u_id = req.params.u_id;
    const data = yield (0, prisma_query_classify_1.getClassifyWithWaitForVerifyWithUserId)(u_id);
    res.status(200).json(data);
}));
router.put('/classify', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqData = req.body;
    const c_id = reqData.c_id;
    const location = reqData.location;
    const data = yield (0, prisma_query_classify_1.updateClassify)(c_id, location);
    res.status(200).json(data);
}));
router.get('/classify_donut_with_userid/:u_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u_id = req.params.u_id;
    const data = yield (0, prisma_query_classify_1.getClassifyByUserIdDonutChart)(u_id);
    res.status(200).json(data);
}));
router.post('/classify_donut_with_userid_query', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const u_id = data.u_id;
    const filter = data.filter;
    const wood = yield (0, prisma_query_classify_1.getClassifyByUserIdDonutChart)(u_id, filter);
    res.status(200).json(wood);
}));
router.get('/classify_status_donut_with_userid/:u_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u_id = req.params.u_id;
    const data = yield (0, prisma_query_classify_1.getClassifyStatusByUserIdDonutChart)(u_id);
    res.status(200).json(data);
}));
router.post('/verify_status_classify', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const u_id = data.u_id;
    const c_id = data.c_id;
    const description = data.description;
    const status = data.status;
    const classify = (0, prisma_query_classify_1.updateStatusVerify)(c_id, u_id, status, description);
    res.status(200).json({ message: "verify success", data: classify });
}));
router.put('/update_select_result', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const u_id = data.u_id;
    const c_id = data.c_id;
    const result = data.result;
    const classify = (0, prisma_query_classify_1.updateSelectResult)(c_id, u_id, result);
    res.status(200).json({ message: "update success", data: classify });
}));
router.post('/delete_classify', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const c_id = data.c_id;
    yield (0, prisma_query_classify_1.deleteClassify)(c_id);
    res.status(200).json({ message: "delete success" });
}));
exports.default = router;
//# sourceMappingURL=ClassifyRouter.js.map