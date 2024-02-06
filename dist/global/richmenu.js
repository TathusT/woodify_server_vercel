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
exports.sessionOut = exports.afterLoginSuccessExpert = exports.afterLoginSuccessUser = void 0;
const axios_1 = __importDefault(require("axios"));
const line_config_1 = require("./line/line_config");
const richmenu_1 = require("./line/richmenu");
function afterLoginSuccessUser(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(uid, richmenu_1.loginLine);
        let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/${richmenu_1.loginLine}`;
        yield axios_1.default.request({
            method: "POST",
            url: `${urlRequest}`,
            headers: {
                Authorization: `Bearer ` + line_config_1.lineConfig.channelAccessToken,
            },
        });
    });
}
exports.afterLoginSuccessUser = afterLoginSuccessUser;
function afterLoginSuccessExpert(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/${richmenu_1.loginLine}`;
        yield axios_1.default.request({
            method: "POST",
            url: `${urlRequest}`,
            headers: {
                Authorization: `Bearer ` + line_config_1.lineConfig.channelAccessToken,
            },
        });
    });
}
exports.afterLoginSuccessExpert = afterLoginSuccessExpert;
function sessionOut(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/${richmenu_1.notLoginLine}`;
        yield axios_1.default.request({
            method: "POST",
            url: `${urlRequest}`,
            headers: {
                Authorization: `Bearer ` + line_config_1.lineConfig.channelAccessToken,
            },
        });
    });
}
exports.sessionOut = sessionOut;
//# sourceMappingURL=richmenu.js.map