import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { Server } from "socket.io";
import { createServer } from "http";
import WoodRouter from "./routes/woodRouter";
import ClassifyRouter from "./routes/ClassifyRouter";
import LineWebhookRouter from "./routes/LineWebhook";
import AuthenRouter from "./routes/Authentication";
import ManualRouter from "./routes/ManualRouter";
import UserRouter from "./routes/UserRouter";
import NoteRouter from "./routes/NoteRouter";
import AddTokenRouter from './routes/AddTokenRouter'

dotenv.config();

const rootDirectoryPath = path.join(__dirname);

const app: Express = express();
app.use(bodyParser.json({ limit: "1000mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "1000mb" }));
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", express.static(rootDirectoryPath));
app.use(WoodRouter);
app.use(LineWebhookRouter);
app.use(AuthenRouter);
app.use(ManualRouter);
app.use(ClassifyRouter);
app.use(UserRouter);
app.use(NoteRouter);
app.use(AddTokenRouter);

const port = process.env.PORT;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
}); 

io.on("connection", (socket) => {
  console.log("🚀 ~ Client Connected:", socket.id);

  const { sessionId } : any = socket.handshake.query;
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

export { io };

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });
