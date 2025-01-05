"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const checkMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header not provided' });
        }
        const accessToken = authHeader.split(" ")[1];
        if (!accessToken) {
            return res.status(401).json({ message: 'Access token not provided' });
        }
        const jwtResponse = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
        // req.user = jwtResponse; /// กลับมาดู
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
exports.default = checkMiddleware;
//# sourceMappingURL=middleware.js.map