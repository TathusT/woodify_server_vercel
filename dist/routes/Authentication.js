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
const prisma_query_1 = require("../global/prisma_query");
const token_manager_1 = require("../global/token_manager");
const richmenu_1 = require("../global/richmenu");
const router = express_1.default.Router();
const now = new Date();
router.post("/liff/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = req.body.lineProfile;
    const uid = profile.userId;
    const user = yield (0, prisma_query_1.verifyLogin)({ line_id: uid });
    if (user.length == 0) {
        const newUser = yield (0, prisma_query_1.createUser)({
            line_id: uid,
            firstname: profile.displayName,
            lastname: "",
            username: "",
            password: "",
            email: "",
            phone: "",
            image: profile.pictureUrl,
        });
        yield (0, richmenu_1.afterLoginSuccessUser)(uid);
        const accessToken = yield (0, token_manager_1.generateAccessToken)({ id: newUser.u_id });
        res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
    }
    else {
        if (user[0].role == "EXPERT") {
            yield (0, richmenu_1.afterLoginSuccessExpert)(uid);
        }
        else {
            yield (0, richmenu_1.afterLoginSuccessUser)(uid);
        }
        const accessToken = yield (0, token_manager_1.generateAccessToken)({ id: user[0].u_id });
        res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
    }
}));
router.post("/admin/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const user = yield (0, prisma_query_1.verifyLogin)({
        username: data.username,
        password: data.password,
    });
    if (user.length != 0) {
        const accessToken = yield (0, token_manager_1.generateAccessToken)({ id: user[0].u_id });
        res.send(JSON.stringify({ status: 1, access_token: accessToken }));
    }
    else {
        res.send(JSON.stringify({ status: 0 }));
    }
}));
router.post("/line/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const user = yield (0, prisma_query_1.verifyLogin)({
        username: data.username,
        password: data.password,
    });
    if (user.length != 0) {
        const accessToken = yield (0, token_manager_1.generateAccessToken)({ id: user[0].u_id });
        if (user[0].role == "EXPERT") {
            yield (0, richmenu_1.afterLoginSuccessExpert)(user[0].line_id);
        }
        else {
            yield (0, richmenu_1.afterLoginSuccessUser)(user[0].line_id);
        }
        console.log(JSON.stringify({ status: 1, line_access_token: accessToken }));
        res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
    }
    else {
        res.send(JSON.stringify({ status: 0 }));
    }
}));
router.post("/authentication_user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jwtStatus = yield (0, token_manager_1.checkAuthentication)(req);
    console.log(jwtStatus);
    if (jwtStatus != false) {
        res.send(jwtStatus);
    }
    else {
        res.send(false);
    }
}));
router.post("/line/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = JSON.parse(req.body.data);
    const profile = req.body.lineProfile;
    const uid = profile.userId;
    const user = yield (0, prisma_query_1.verifyLogin)({ username: data.username });
    if (user.length == 0) {
        const newUser = yield (0, prisma_query_1.createUser)({
            line_id: uid,
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            password: data.password,
            email: data.email,
            phone: "",
            image: profile.pictureUrl,
        });
        res.send(JSON.stringify({ status: 1, message: "create Success" }));
    }
    else {
        res.send(JSON.stringify({ status: 1, message: "create Failed" }));
    }
}));
router.post("/line/google_login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = req.body.lineProfile;
    const googleData = JSON.parse(req.body.googleData);
    const uid = profile.userId;
    const user = yield (0, prisma_query_1.verifyLogin)({ line_id: uid });
    if (user.length == 0) {
        const newUser = yield (0, prisma_query_1.createUser)({
            line_id: uid,
            firstname: googleData.given_name,
            lastname: googleData.family_name,
            username: "",
            password: "",
            email: googleData.email,
            phone: "",
            image: profile.pictureUrl,
        });
        yield (0, richmenu_1.afterLoginSuccessUser)(uid);
        const accessToken = yield (0, token_manager_1.generateAccessToken)({ id: newUser.u_id });
        res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
    }
    else {
        if (user[0].role == "EXPERT") {
            yield (0, richmenu_1.afterLoginSuccessExpert)(uid);
        }
        else {
            yield (0, richmenu_1.afterLoginSuccessUser)(uid);
        }
        const accessToken = yield (0, token_manager_1.generateAccessToken)({ id: user[0].u_id });
        res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
    }
}));
exports.default = router;
//# sourceMappingURL=Authentication.js.map