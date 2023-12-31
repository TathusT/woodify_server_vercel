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
function afterLoginSuccessUser(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/richmenu-b249cae10c20e8f1b01658430fc7a47d`;
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
        let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/richmenu-792069faa05a7bac91e5821bfcf94932`;
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
        let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/richmenu-e4c016ca164f3b51441760c88f259962`;
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