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
router.post("/send_email", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let email = req.body.email;
        const checkEmail = yield (0, prisma_query_user_1.getUserWithEmail)(email);
        if (checkEmail != null) {
            return res.json({ status: 200, message: 'email is taken' });
        }
        let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let passwordLength = 8;
        let password = "";
        for (let i = 0; i <= passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        let charsAdmin = '0123456789';
        let accNumber = 8;
        let genAcc = "";
        while (true) {
            genAcc = "";
            for (let i = 0; i <= accNumber; i++) {
                let randomNumberAcc = Math.floor(Math.random() * charsAdmin.length);
                genAcc += chars.substring(randomNumberAcc, randomNumberAcc + 1);
            }
            const checkUser = yield (0, prisma_query_user_1.checkUsername)(`admin${genAcc}`);
            if (checkUser == null) {
                break;
            }
            else {
                break;
            }
        }
        try {
            const output = `
              <p>You have a invite to expert user in Woodify</p>
              <h3>Link for register</h3>
              <ul>
                  <li>username : admin${parseInt(genAcc)}</li>
                  <li>password : ${password}</li>
              </ul>
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