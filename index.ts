import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import WoodRouter from "./routes/woodRouter";
import LineWebhookRouter from './routes/LineWebhook'
import AuthenRouter from './routes/Authentication'
import ManualRouter from './routes/ManualRouter'

dotenv.config();

const rootDirectoryPath = path.join(__dirname);

const app: Express = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(morgan("dev"))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", express.static(rootDirectoryPath));
app.use(WoodRouter);
app.use(LineWebhookRouter);
app.use(AuthenRouter);
app.use(ManualRouter);

const port = process.env.PORT;



app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
