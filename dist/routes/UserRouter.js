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
const prisma_query_user_1 = require("../global/prisma_query_user");
require('dotenv').config();
const router = express_1.default.Router();
router.get("/user/:u_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u_id = req.params.u_id;
    try {
        const classify = yield (0, prisma_query_user_1.getUserFromUserId)(u_id);
        res.status(200).json(classify);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, prisma_query_user_1.getAllUser)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/user_today", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, prisma_query_user_1.getUserToday)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.put("/update_role", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const uid = data.u_id;
        const role = data.role;
        const user = yield (0, prisma_query_user_1.updateRoleFromId)(uid, role);
        res.status(200).json({ message: "update role success", data: user });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = router;
//# sourceMappingURL=UserRouter.js.map