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
const prisma_query_addToken_1 = require("../global/prisma_query_addToken");
require("dotenv").config();
const router = express_1.default.Router();
router.post("/token_invited", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const a_id = data.a_id;
        const a_token = yield (0, prisma_query_addToken_1.checkTimeLinkInvite)(a_id);
        let newData = {};
        if (a_token.message == "update success") {
            newData["a_token"] = a_token;
            newData["access_token"] = yield (0, token_manager_1.generateAccessToken)({
                id: a_token.userid,
            });
        }
        else {
            newData["a_token"] = a_token;
        }
        console.log(newData);
        res.status(200).json(newData);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = router;
//# sourceMappingURL=AddTokenRouter.js.map