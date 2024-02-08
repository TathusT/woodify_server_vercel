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
const token_manager_1 = require("../global/token_manager");
const richmenu_1 = require("../global/richmenu");
const prisma_query_addToken_1 = require("../global/prisma_query_addToken");
const nodemailer = require("nodemailer");
require('dotenv').config();
const router = express_1.default.Router();
router.get("/user/:u_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u_id = req.params.u_id;
    try {
        const user = yield (0, prisma_query_user_1.getUserFromUserId)(u_id);
        res.status(200).json(user);
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
router.post('/user_with_token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const token = data.token;
        const u_id = yield (0, token_manager_1.decryptAccessToken)(token);
        const user = yield (0, prisma_query_user_1.getUserFromUserId)(u_id.id);
        res.status(200).json(user);
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
router.put("/update_verify_data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const user = yield (0, prisma_query_user_1.setUserData)(data);
        if (user.verify_data == true) {
            if (user.role == "EXPERT") {
                yield (0, richmenu_1.afterLoginSuccessExpert)(user.line_id);
            }
            else if (user.role == 'USER') {
                yield (0, richmenu_1.afterLoginSuccessUser)(user.line_id);
            }
            else if (user.role == 'ADMIN') {
                yield (0, richmenu_1.afterLoginSuccessExpert)(user.line_id);
            }
        }
        res.status(200).json({ message: "update_success" });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/create_expert", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const user = yield (0, prisma_query_user_1.createExpert)(data);
        const access_token = yield (0, token_manager_1.generateAccessToken)({ id: user.u_id });
        res.status(200).json({ message: "create_success", data: user, access_token: access_token });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/send_email", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        const email = data.email;
        const token = data.token;
        const inviteBy = yield (0, token_manager_1.decryptAccessToken)(token);
        const checkEmail = yield (0, prisma_query_user_1.getUserWithEmail)(email);
        if (checkEmail != null) {
            if (checkEmail.role == 'EXPERT') {
                return res.json({ status: 200, message: 'email is expert' });
            }
        }
        try {
            const a_token = yield (0, prisma_query_addToken_1.addTokenInvited)(inviteBy.id, email);
            const output = `
              <p>You have a invite to expert user in Woodify</p>
              <h3>Link for register</h3>
              <a href='${process.env.PATH_FRONT}/admin/signup/${a_token.a_id}'>Click here</a>
              `;
            var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "63070065@kmitl.ac.th",
                    pass: "SakuraHiro8852",
                },
            });
            var mailOptions = {
                from: "63070065@kmitl.ac.th",
                to: `${email}`,
                subject: "Verify to expert account",
                text: "from admin woodify",
                html: output,
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    res.json({ status: 200, message: "send success" });
                }
            });
        }
        catch (error) {
            return next(error);
        }
    });
});
exports.default = router;
//# sourceMappingURL=UserRouter.js.map