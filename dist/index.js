"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const woodRouter_1 = __importDefault(require("./routes/woodRouter"));
const ClassifyRouter_1 = __importDefault(require("./routes/ClassifyRouter"));
const LineWebhook_1 = __importDefault(require("./routes/LineWebhook"));
const Authentication_1 = __importDefault(require("./routes/Authentication"));
const ManualRouter_1 = __importDefault(require("./routes/ManualRouter"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const NoteRouter_1 = __importDefault(require("./routes/NoteRouter"));
const AddTokenRouter_1 = __importDefault(require("./routes/AddTokenRouter"));
dotenv_1.default.config();
const rootDirectoryPath = path_1.default.join(__dirname);
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: "1000mb" }));
app.use(body_parser_1.default.urlencoded({ extended: true, limit: "1000mb" }));
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/", express_1.default.static(rootDirectoryPath));
app.use(woodRouter_1.default);
app.use(LineWebhook_1.default);
app.use(Authentication_1.default);
app.use(ManualRouter_1.default);
app.use(ClassifyRouter_1.default);
app.use(UserRouter_1.default);
app.use(NoteRouter_1.default);
app.use(AddTokenRouter_1.default);
const port = process.env.PORT;
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*",
    },
});
exports.io = io;
io.on("connection", (socket) => {
    console.log("🚀 ~ Client Connected:", socket.id);
    const { sessionId } = socket.handshake.query;
    console.log("🚀 ~ io.on ~ sessionId:", sessionId);
    socket.join(sessionId);
    socket.on("disconnect", () => {
        socket.leave(sessionId);
        console.log("disconnect already");
    });
});
httpServer.listen(4000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });
//# sourceMappingURL=index.js.map