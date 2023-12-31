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
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptAccessToken = exports.checkAuthentication = exports.generateAccessToken = void 0;
const jwt = require("jsonwebtoken");
function generateAccessToken(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
    });
}
exports.generateAccessToken = generateAccessToken;
function checkAuthentication(request) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accessToken = request.headers.authorization.split(" ")[1];
            const jwtResponse = jwt.verify(String(accessToken), process.env.ACCESS_TOKEN);
            return jwtResponse;
        }
        catch (error) {
            return false;
        }
    });
}
exports.checkAuthentication = checkAuthentication;
function decryptAccessToken(accessToken) {
    return __awaiter(this, void 0, void 0, function* () {
        return jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                console.error("Token verification failed:", err);
                return;
            }
            return decoded;
        });
    });
}
exports.decryptAccessToken = decryptAccessToken;
//# sourceMappingURL=token_manager.js.map