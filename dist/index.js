"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const woodRouter_1 = __importDefault(require("./routes/woodRouter"));
const LineWebhook_1 = __importDefault(require("./routes/LineWebhook"));
const Authentication_1 = __importDefault(require("./routes/Authentication"));
const ManualRouter_1 = __importDefault(require("./routes/ManualRouter"));
dotenv_1.default.config();
const rootDirectoryPath = path_1.default.join(__dirname);
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '100mb' }));
app.use(body_parser_1.default.urlencoded({ extended: true, limit: '100mb' }));
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/", express_1.default.static(rootDirectoryPath));
app.use(woodRouter_1.default);
app.use(LineWebhook_1.default);
app.use(Authentication_1.default);
app.use(ManualRouter_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map