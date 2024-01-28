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
const token_manager_1 = require("../global/token_manager");
const prisma_query_note_1 = require("../global/prisma_query_note");
const index_1 = require("../index");
require("dotenv").config();
const router = express_1.default.Router();
router.get("/note/:c_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const c_id = req.params.c_id;
        const note = yield (0, prisma_query_note_1.getNoteFromCid)(c_id);
        res.status(200).json(note);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const c_id = data.c_id;
        const token = data.token;
        const description = data.description;
        const u_id = yield (0, token_manager_1.decryptAccessToken)(token);
        const note = yield (0, prisma_query_note_1.addNote)(description, c_id, u_id.id);
        // Emit message to specific room (sessionId)
        index_1.io.to(data.sessionId).emit('received_message', note);
        res.status(200).json(note);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = router;
//# sourceMappingURL=NoteRouter.js.map